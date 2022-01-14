import React from "react";
import Nav from "./Nav";

import { Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Nav navigation={navigation} />
    </View>
  );
}
