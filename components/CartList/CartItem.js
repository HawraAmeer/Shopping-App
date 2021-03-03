import { Body, Left, ListItem, Right, Text, Thumbnail } from "native-base";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/actions/cartActions";
import { CartItemStyled, TrashIcon } from "./styles";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <ListItem avatar>
      <Left>
        <Thumbnail square source={{ uri: item.image }} />
      </Left>
      <Body>
        <CartItemStyled>{item.name}</CartItemStyled>
        <Text note>Quantity: {item.quantity}</Text>
      </Body>
      <Right>
        <Text>Price: {item.price * item.quantity} BD</Text>
        <TrashIcon
          type="Octicons"
          name="trashcan"
          onPress={() => dispatch(deleteItem(item.id))}
        />
      </Right>
    </ListItem>
  );
};

export default CartItem;
