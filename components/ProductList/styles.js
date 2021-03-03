import { Icon, Right } from "native-base";
import styled from "styled-components/native";

export const ProductItemStyled = styled.Text`
  color: black;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const CartPlusStyled = styled(Icon)`
  color: #f23f75;
  margin-left: 15px;
  font-size: 30px;
`;

export const RightStyled = styled(Right)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
