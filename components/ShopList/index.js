import { List } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import Loading from "../Loading";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const loading = useSelector((state) => state.shopReducer.loading);

  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));

  if (loading) return <Loading />;

  return <List>{shopList}</List>;
};

export default ShopList;
