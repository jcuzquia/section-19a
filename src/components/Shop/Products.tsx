import { FC } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { ProdItem } from "../../model/ProductItem";

interface ProductsProps {}

const DUMMY_PRODUCTS: Array<ProdItem> = [
  {
    itemId: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book descreiption",
  },
  {
    itemId: "p2",
    price: 8,
    title: "My Second Book",
    description: "The second book description",
  },
];

const Products: FC<ProductsProps> = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem item={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
