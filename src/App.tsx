import React, { Fragment, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import Cart from "./components/Cart/Cart";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const showcart = useAppSelector((state) => state.ui.cartIsVisible);

  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
