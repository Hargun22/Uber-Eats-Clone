import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import firebaseApp from "../../firebase";
import {
  getFirestore,
  addDoc,
  collection,
  Timestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
  getRestaurantName,
} from "../../features/basketSlice";
import Currency from "react-currency-formatter";
import OrderItem from "./OrderItem";

export default function Checkout({
  navigation,
  modalVisible,
  setModalVisible,
}) {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurantName = useSelector(getRestaurantName);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.food.title] = results[item.food.title] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
    console.log(groupedItemsInBasket);
  }, [items]);

  const addOrderTorFireBase = async () => {
    const db = getFirestore(firebaseApp);
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        items: items,
        createdAt: Timestamp.now(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setModalVisible(false);

    navigation.navigate("OrderCompleted");
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    cartButton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  return (
    <>
      {modalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.cartButton}>{restaurantName}</Text>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
              {items.map((item, index) => (
                <OrderItem key={index} item={item.food} />
              ))}
            </ScrollView>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>
                <Currency quantity={basketTotal} currency="CAD" />
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,

                  position: "relative",
                }}
                onPress={() => {
                  addOrderTorFireBase();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20, padding: 2 }}>
                    Checkout
                  </Text>
                  <Text style={{ fontSize: 18, color: "white" }}>
                    <Currency quantity={basketTotal} currency="CAD" />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
