import { Spinner } from "native-base";
import React from "react";
import { View } from "react-native";

const Loading = () => {
  return (
    <View>
      <Spinner style={{ height: "90%" }} color="red" />
    </View>
  );
};

export default Loading;
