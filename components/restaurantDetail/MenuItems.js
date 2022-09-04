import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import MenuItem from "./MenuItem";

const foods = [
  {
    title: "Tandoori Chicken2",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken2",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Anazing, Indigg dish with tenderloin chicken off the s",
    price: 19.2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
];

export default function MenuItems() {
  return (
    <View style={{ justifyContent: "flex-end", flex: 1 }}>
      {foods.map((food, index) => (
        <MenuItem key={index} index={index} food={food} />
      ))}
    </View>
  );
}
//
//<ViewCart restaurantName={name} navigation={navigation} />
