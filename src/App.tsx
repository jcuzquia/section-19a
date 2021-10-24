import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useAppSelector } from "./hooks/hooks";
import Cart from "./components/Cart/Cart";

function App() {
  const showcart = useAppSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
