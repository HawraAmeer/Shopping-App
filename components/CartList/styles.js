import { Icon } from "native-base";
import styled from "styled-components/native";

export const CartItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const TrashIcon = styled(Icon)`
  color: #f23f75;
  margin-top: 5px;
  font-size: 32px;
`;

export const CheckoutButton = styled.TouchableOpacity`
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
