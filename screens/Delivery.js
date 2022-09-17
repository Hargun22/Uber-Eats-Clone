import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default function Delivery() {
  const navigation = useNavigation();
  const restaurantName = useSelector();

  return (
    <View>
      <Text>Delivery</Text>
    </View>
  );
}
