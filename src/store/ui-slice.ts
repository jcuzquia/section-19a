import { createSlice } from "@reduxjs/toolkit";
import { NotificationObj } from "../model/NotificationObj";

interface UIState {
  cartIsVisible: boolean;
  notification: NotificationObj | null;
}

const initialState = { cartIsVisible: false, notification: null } as UIState;

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
