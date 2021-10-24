import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../components/Cart/CartItem";
import { CartObj } from "../model/CartObj";
import { ProdItem } from "../model/ProductItem";

interface CartState {
  items: Array<CartObj>;
  totalQuantity: number;
  totalAmount: number;
}

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item: ProdItem = action.payload;
      const newItem: CartObj = {
        id: item.itemId,
        name: item.title,
        price: item.price,
      };
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      console.log(existingItem);
      console.log(state.items);

      if (!existingItem) {
        newItem.quantity = 1;
        newItem.price = item.price;
        newItem.totalPrice = newItem.price;
        state.items.push(newItem);
      } else {
        existingItem!.quantity!++;
        existingItem.totalPrice = existingItem!.totalPrice! + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity!--;
        existingItem!.totalPrice =
          existingItem!.totalPrice! - existingItem!.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
