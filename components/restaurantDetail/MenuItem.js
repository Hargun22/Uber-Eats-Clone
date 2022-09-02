import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function MenuItem({ index, food }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity key={index} onPress={() => setIsPressed(!isPressed)}>
        <View>
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
          {!isPressed && (
            <Divider
              width={0.5}
              orientation="vertical"
              style={`{ marginHorizontal: 20 }`}
            />
          )}
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={25} />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={25} />
            </TouchableOpacity>
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      )}
    </>
  );
}

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
