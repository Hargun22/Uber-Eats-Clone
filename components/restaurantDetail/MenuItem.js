import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItemsWithId,
  addToBasket,
  removeFromBasket,
} from "../../features/basketSlice";

import Currency from "react-currency-formatter";

export default function MenuItem({ index, food }) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, index));
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ index, food }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) {
      return;
    }

    dispatch(removeFromBasket({ index }));
  };
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
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <AntDesign
                name="minuscircle"
                size={25}
                color={items.length > 0 ? "black" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
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
    <Text>
      <Currency quantity={props.food.price} currency="CAD" />
    </Text>
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
