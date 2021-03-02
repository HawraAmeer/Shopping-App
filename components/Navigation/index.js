import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ProductDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: { backgroundColor: "#fff" },
          headerTintColor: "#f23f75",
          headerStyle: {
            backgroundColor: "#ffff99",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="ShopList"
          component={ShopList}
          options={{ title: "Shops List" }}
        />
        <Screen
          name="ShopDetail"
          component={ShopDetail}
          options={({ route }) => {
            const { shop } = route.params;
            return {
              title: shop.name,
            };
          }}
        />
        <Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ route }) => {
            const { product } = route.params;
            return {
              title: product.name,
            };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;