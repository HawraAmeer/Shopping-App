import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/authActions";
import {
  AuthContainer,
  AuthTextInput,
  AuthTitle,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="grey"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton>
        <AuthButtonText onPress={handleSubmit}>Submit</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Click to Register!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
