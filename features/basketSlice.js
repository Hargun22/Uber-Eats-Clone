import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  restaurantName: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.index === action.payload.index
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove the item as it is not in the basket");
      }

      state.items = newBasket;
    },
    addRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, addRestaurantName } =
  basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;
export const getRestaurantName = (state) => state.basket.restaurantName;

export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.index == id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.food.price), 0);

export default basketSlice.reducer;
