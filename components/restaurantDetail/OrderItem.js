import { View, Text } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

export default function OrderItem({ item }) {
  const title = item.title;
  const price = item.price;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>
        <Currency quantity={price} currency="CAD" />
      </Text>
    </View>
  );
}
