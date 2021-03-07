import { List } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutButton from "../buttons/CheckoutButton";
import Loading from "../Loading";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.cartReducer.items);
  const productReducer = useSelector((state) => state.productReducer);

  if (productReducer.loading) return <Loading />;

  const cartList = items
    .map((item) => ({
      ...productReducer.products.find((product) => item.id === product.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem key={item.id} item={item} />);

  return (
    <>
      <List>{cartList}</List>
      {cartList.length !== 0 && <CheckoutButton navigation={navigation} />}
    </>
  );
};

export default CartList;
