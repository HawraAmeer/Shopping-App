import React from "react";
import { Image, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import { useSelector } from "react-redux";
import Loading from "../Loading";

const ProductDetail = ({ navigation, route }) => {
  const productLoading = useSelector((state) => state.productReducer.loading);
  const shopLoading = useSelector((state) => state.shopReducer.loading);

  const { product } = route.params;

  if (shopLoading || productLoading) return <Loading />;

  return (
    <View>
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: product.image }}
            style={{ height: 200, width: 200, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text style={{ color: "#f23f75" }}>Price: {product.price} BD</Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default ProductDetail;
