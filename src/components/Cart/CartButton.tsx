import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = (props) => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);
  console.log("Rendering Cart Button");
  console.log(cartQuantity);
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
