import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import { CheckoutButtonStyled, CheckoutButtonText } from "../../styles";

const CheckoutButton = ({ items, navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const handlePress = () => {
    if (user) {
      dispatch(checkout(items));
      Alert.alert(
        "Alert",
        "Thank you for Shopping with us!",
        [{ text: "Ok", onPress: () => navigation.navigate("Home") }],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Alert",
        "You have to Sign in before Checking out!",
        [
          {
            text: "Sign in",
            onPress: () => navigation.navigate("Signin"),
          },
          { text: "Ok" },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <CheckoutButtonStyled onPress={() => handlePress()}>
      <CheckoutButtonText>Checkout</CheckoutButtonText>
    </CheckoutButtonStyled>
  );
};

export default CheckoutButton;
