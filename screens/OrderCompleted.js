import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  getRestaurantName,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";

import LottieView from "lottie-react-native";

export default function OrderCompleted() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurantName = useSelector(getRestaurantName);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <View>
        <Text>
          Your order at {restaurantName} has been placed for a total of{" "}
          {basketTotal}
        </Text>
      </View>
      {/* menuItems */}
      <LottieView
        style={{ height: 200, alignSelf: "center" }}
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
      />
    </SafeAreaView>
  );
}
