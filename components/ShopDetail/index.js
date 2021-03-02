import React from "react";
import { Image, View } from "react-native";
import { Card, CardItem } from "native-base";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import ProductList from "../ProductList";

const ShopDetail = ({ navigation, route }) => {
  const productReducer = useSelector((state) => state.productReducer);

  const { shop } = route.params;
  const shopLoading = useSelector((state) => state.shopReducer.loading);

  if (shopLoading || productReducer.loading) return <Loading />;

  shopProducts = shop.donuts.map((product) =>
    productReducer.products.find((prod) => prod.id === product.id)
  );

  return (
    <View>
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: shop.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
      </Card>
      <ProductList products={shopProducts} navigation={navigation} />
    </View>
  );
};

export default ShopDetail;
