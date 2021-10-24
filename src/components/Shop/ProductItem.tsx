import { FC } from "react";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { cartActions } from "../../store/cart-slice";
import { ProdItem } from "../../model/ProductItem";

interface ProductItemProps {
  item: ProdItem;
}

const ProductItem: FC<ProductItemProps> = (props) => {
  const item: ProdItem = props.item;

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
