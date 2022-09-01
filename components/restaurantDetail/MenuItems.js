import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import ViewCart from "./ViewCart";

const foods = [
  {
    title: "Tandoori Chicken2",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken2",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: "$19.20",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
];

export default function MenuItems() {
  return (
    <View style={{ justifyContent: "flex-end", flex: 1 }}>
      {foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </View>
  );
}

//<ViewCart restaurantName={name} navigation={navigation} />

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "600" }}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
