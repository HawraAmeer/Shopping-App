import { ListItem, Thumbnail } from "native-base";
import React from "react";
import { ItemStyled } from "../../styles";

const ShopItem = ({ navigation, shop }) => {
  return (
    <ListItem onPress={() => navigation.navigate("ShopDetail", { shop })}>
      <Thumbnail square source={{ uri: shop.image }} />
      <ItemStyled>{shop.name}</ItemStyled>
    </ListItem>
  );
};

export default ShopItem;
