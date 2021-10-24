import { FC } from "react";
import { ProdItem } from "../../model/ProductItem";
import classes from "./CartItem.module.css";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { CartObj } from "../../model/CartObj";
import { AppDispatch } from "../../store/index";
import { cartActions } from "../../store/cart-slice";
import { title } from "process";

interface CartItemProps {
  item: CartObj;
}
const CartItem: FC<CartItemProps> = (props) => {
  const dispatch = useAppDispatch();
  const { name, quantity, totalPrice, price, id } = props.item;

  const addItemHandler = () => {
    const item: ProdItem = { itemId: id, title: title, price: price };
    dispatch(cartActions.addItemToCart(item));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice!.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
