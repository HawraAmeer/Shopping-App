import React from "react";
import { useNavigation } from "@react-navigation/native";
// import { Icon } from "native-base";
import { CartTextStyled, CartButtonStyled } from "../../styles";
import { useSelector } from "react-redux";
import { Button } from "native-base";

const CartButton = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.cartReducer.items);

  if (items.length == 0)
    return <CartButtonStyled type="MaterialIcons" name="shopping-cart" />;

  let totalQuantity = 0;
  items.forEach((item) => (totalQuantity += item.quantity));

  return (
    <Button transparent light onPress={() => navigation.navigate("CartList")}>
      <CartTextStyled>{totalQuantity}</CartTextStyled>
      <CartButtonStyled type="MaterialIcons" name="shopping-cart" />
    </Button>

    // <Icon
    //   style={{ color: "#f23f75", marginRight: 15 }}
    //   type="AntDesign"
    //   name="shoppingcart"
    //   onPress={() => navigation.navigate("CartList")}
    // />
  );
};

export default CartButton;
