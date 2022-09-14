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
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Total from "./Total";

export default function Checkout() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurantName = useSelector(getRestaurantName);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const navigation = useNavigation();

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

    navigation.navigate("OrderCompleted");
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: "white",
    },

    modalCheckoutContainer: {
      backgroundColor: "#F5F5F5",
      borderWidth: 1,
      flex: 1,
    },

    cartButton: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
    },

    subtotalContainer: {
      marginTop: 15,
      backgroundColor: "white",
      padding: 20,
    },

    headerbar: {
      flexDirection: "row",
      justifyContent: "center",
      padding: 25,
      backgroundColor: "white",
    },

    deliveryOption: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
    },
  });

  return (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <View style={styles.headerbar}>
            <Text style={styles.cartButton}>{restaurantName}</Text>
            <TouchableOpacity
              style={{ position: "absolute", top: 10, right: 10 }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="closecircle" size={45} />
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryOption}>
            <Text style={{ flex: 1, fontSize: 16, fontWeight: "300" }}>
              Deliver in 30-40 mins
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>Change</Text>
            </TouchableOpacity>
          </View>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <OrderItem
                key={key}
                numItems={items.length}
                item={items[0].food}
              />
            ))}
          </ScrollView>
          <View style={styles.subtotalContainer}>
            <Total
              basketTotal={basketTotal}
              text={"Order Total"}
              bold={false}
            />
            <Total basketTotal={3.99} text={"Delivery Fee"} bold={false} />
            <Total
              basketTotal={basketTotal + 3.99}
              text={"Total"}
              bold={true}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 25,
            }}
          >
            <TouchableOpacity
              style={{
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
                <Text style={{ color: "white", fontSize: 22, padding: 2 }}>
                  Checkout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
