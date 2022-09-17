import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getRestaurantName,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import ProgressCircle from "react-native-progress/Circle";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderCompleted() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  }, []);

  const restaurantName = useSelector(getRestaurantName);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        margin: 15,
      }}
    >
      <LottieView
        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.2}
        loop={false}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={{
          fontSize: 25,
          color: "black",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Sending your order to {restaurantName}
      </Animatable.Text>
    </SafeAreaView>
  );
}

//   {/* green checkmark */}
//
//   <View>
//     <Text>
//       Your order at {restaurantName} has been placed for a total of{" "}
//     </Text>
//     <Text>
//       <Currency quantity={basketTotal} currency="CAD" />
//     </Text>
//   </View>
//   {/* menuItems */}
//   <LottieView
//     style={{ height: 200, alignSelf: "center" }}
//     source={require("../assets/animations/cooking.json")}
//     autoPlay
//     speed={0.5}
//   />
