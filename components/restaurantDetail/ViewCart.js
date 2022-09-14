import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
  getRestaurantName,
} from "../../features/basketSlice";
import Currency from "react-currency-formatter";
import Checkout from "./Checkout";
import { useNavigation } from "@react-navigation/native";

export default function ViewCart() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurantName = useSelector(getRestaurantName);
  const navigation = useNavigation();

  return (
    <>
      {/* <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <Checkout
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Modal> */}
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
            onPress={() => navigation.navigate("Checkout")}
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
