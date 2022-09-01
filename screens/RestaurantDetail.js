import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <About route={route} />
        <Divider width={5} style={{ marginTop: 10 }} />
        <MenuItems />
      </ScrollView>
      <ViewCart restaurantName={route.params.name} navigation={navigation} />
    </View>
  );
}
