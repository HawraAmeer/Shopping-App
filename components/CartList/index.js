import { List } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import Loading from "../Loading";
import CartItem from "./CartItem";
import { CheckoutButton, CheckoutButtonText } from "./styles";

const CartList = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);
  const productReducer = useSelector((state) => state.productReducer);

  if (productReducer.loading) return <Loading />;

  const cartList = items
    .map((item) => ({
      ...productReducer.products.find((product) => item.id === product.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem key={item.id} item={item} />);

  const handleCheckout = () => {
    dispatch(checkout());
    alert("Thank You!");
    navigation.navigate("Home");
  };

  return (
    <>
      <List>{cartList}</List>
      {cartList.length !== 0 && (
        <CheckoutButton onPress={() => handleCheckout()}>
          <CheckoutButtonText>Checkout</CheckoutButtonText>
        </CheckoutButton>
      )}
    </>
  );
};

export default CartList;
