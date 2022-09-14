import { View, Text } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

export default function OrderItem({ numItems, item }) {
  const title = item.title;
  const price = item.price;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#E3E3E3",
        backgroundColor: "white",
      }}
    >
      <Text>{numItems} x </Text>
      <Text
        style={{ paddingLeft: 10, flex: 1, fontWeight: "600", fontSize: 16 }}
      >
        {title}
      </Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>
        <Currency quantity={price} currency="CAD" />
      </Text>
    </View>
  );
}
