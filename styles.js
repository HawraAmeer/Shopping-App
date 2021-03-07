import { Icon } from "native-base";
import styled from "styled-components/native";

export const ItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 16px;
  width: 100%;
`;

export const CartButtonStyled = styled(Icon)`
  color: #f23f75;
  margin-right: 15px;
`;

export const CartTextStyled = styled.Text`
  color: #f23f75;
  font-size: 20px;
`;

export const CheckoutButtonStyled = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f23f75;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #ffff99;
  font-weight: bold;
  font-size: 18px;
`;
