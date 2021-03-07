import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "./styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  return (
    <HomeBackground
      source={{
        uri:
          "https://i.pinimg.com/originals/a9/10/d4/a910d4f3486f0e1f9e2da9bd5f8269d5.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Donut Shops</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
            Shops List
          </ButtonStyled>
          {user ? (
            <ButtonStyled onPress={() => dispatch(signout())}>
              Sign out
            </ButtonStyled>
          ) : (
            <ButtonStyled onPress={() => navigation.navigate("Signin")}>
              Sign in
            </ButtonStyled>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
