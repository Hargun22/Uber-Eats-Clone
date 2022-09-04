import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import Currency from "react-currency-formatter";
import { createNativeWrapper } from "react-native-gesture-handler";

export default function ViewCart() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  return (
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
            <Text style={{ color: "white", fontSize: 20, paddingRight: 5 }}>
              <Currency quantity={basketTotal} currency="CAD" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
