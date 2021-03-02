import { List } from "native-base";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ navigation, products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} navigation={navigation} />
  ));

  return <List>{productList}</List>;
};

export default ProductList;
