import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import MenuItem from "./MenuItem";

const foods = [
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Paneer",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 14.69,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Peri-Peri Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 12.49,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Burger",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 9.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Chilli Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 14.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Mashed Potato",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 4.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Sushi",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 9.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
];

export default function MenuItems({ route }) {
  return (
    <View style={{ justifyContent: "flex-end", flex: 1 }}>
      {foods.map((food, index) => (
        <MenuItem
          restaurantName={route.params.name}
          key={index}
          index={index}
          food={food}
        />
      ))}
    </View>
  );
}
//
//<ViewCart restaurantName={name} navigation={navigation} />
