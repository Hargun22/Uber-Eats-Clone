import { View, Text } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";

export default function Total({ basketTotal, text, bold }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text
        style={{
          textAlign: "left",
          fontWeight: `${bold ? "600" : "200"}`,
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        {text}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: `${bold ? "600" : "200"}` }}>
        <Currency quantity={basketTotal} currency="CAD" />
      </Text>
    </View>
  );
}
