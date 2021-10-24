import { FC, useState } from "react";
import classes from "./Cart.module.css";
import Card from "../UI/Card";
import { ProdItem } from "../../model/ProductItem";
import CartItem from "./CartItem";
import { useAppSelector } from "../../hooks/hooks";
interface CartProps {}

const Cart: FC<CartProps> = (props) => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const notEmpty = cartItems.length > 0;
  console.log("Rendering Cart");
  console.log(cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {notEmpty &&
          cartItems.map((item) => <CartItem item={item} key={item.id} />)}
      </ul>
    </Card>
  );
};

export default Cart;
