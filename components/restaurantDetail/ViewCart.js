import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import Currency from "react-currency-formatter";
import OrderItem from "./OrderItem";
import { ScrollView } from "react-native-gesture-handler";

export default function ViewCart() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const [modalVisible, setModalVisible] = useState(false);

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.cartButton}>Your Cart</Text>
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
                onPress={() => setModalVisible(false)}
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
      </>
    );
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
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 130,
          zIndex: 999,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              position: "absolute",
              flexDirection: "row",
            }}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#272727",
                borderRadius: 50,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, padding: 15 }}>
                {items.length}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 18, paddingRight: 5 }}>
                <Currency quantity={basketTotal} currency="CAD" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
