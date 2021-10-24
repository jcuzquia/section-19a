import { NodeWithTypeArguments } from "typescript";

export interface ProdItem {
  itemId: string;
  title: string;
  description?: string;
  quantity?: number;
  totalPrice?: number;
  price: number;
  name?: string;
}
