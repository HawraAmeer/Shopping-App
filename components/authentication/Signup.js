import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import {
  AuthContainer,
  AuthTextInput,
  AuthTitle,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
      <AuthTextInput
        placeholder="First Name"
        placeholderTextColor="grey"
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <AuthTextInput
        placeholder="Last Name"
        placeholderTextColor="grey"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <AuthTextInput
        placeholder="E-mail"
        placeholderTextColor="grey"
        onChangeText={(email) => setUser({ ...user, email })}
      />
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
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click to Sign in!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
