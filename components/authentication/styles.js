import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #ffff99;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #f23f75;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #f23f75;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #f23f75;
  border-bottom-color: #f23f75;
  border-bottom-width: 1px;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #f23f75;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #ffff99;
  font-size: 20px;
`;

export const AuthOther = styled.Text`
  color: #f23f75;
  margin-top: 15px;
  font-size: 16px;
`;
