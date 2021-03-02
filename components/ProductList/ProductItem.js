import { ListItem, Thumbnail } from "native-base";
import React from "react";
import { ItemStyled } from "../../styles";

const ProductItem = ({ navigation, product }) => {
  return (
    <ListItem onPress={() => navigation.navigate("ProductDetail", { product })}>
      <Thumbnail square source={{ uri: product.image }} />
      <ItemStyled>{product.name}</ItemStyled>
    </ListItem>
  );
};

export default ProductItem;
