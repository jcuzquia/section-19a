import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  cartIsVisible: boolean;
}

const initialState = { cartIsVisible: false } as UIState;

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
