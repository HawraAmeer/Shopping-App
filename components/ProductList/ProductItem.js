import { Body, Left, ListItem, Text, Thumbnail } from "native-base";
import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/cartActions";
import { CartPlusStyled, ProductItemStyled, RightStyled } from "./styles";

const ProductItem = ({ navigation, product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  return (
    <ListItem
      onPress={() => navigation.navigate("ProductDetail", { product })}
      avatar
    >
      <Left>
        <Thumbnail square source={{ uri: product.image }} />
      </Left>
      <Body>
        <ProductItemStyled>{product.name}</ProductItemStyled>
        <Text note>Price: {product.price} BD / dozen</Text>
      </Body>
      <RightStyled>
        <NumericInput
          value={quantity}
          minValue={1}
          maxValue={100}
          totalWidth={80}
          totalHeight={40}
          type="up-down"
          rounded="true"
          borderColor="#f23f75"
          iconStyle={{ color: "white" }}
          iconSize={20}
          textColor="#f23f75"
          upDownButtonsBackgroundColor="#f23f75"
          onChange={(value) => setQuantity(value)}
        />
        <CartPlusStyled
          type="MaterialIcons"
          name="add-shopping-cart"
          onPress={() =>
            dispatch(addItem({ id: product.id, quantity: quantity }))
          }
        />
      </RightStyled>
    </ListItem>
  );
};

export default ProductItem;
