import React from "react";
import { Text, View } from "react-native";
import Nav from "./Nav";

export default function About({ navigation }) {
  return (
    <View>
      <Text>About</Text>
      <Nav navigation={navigation} />
    </View>
  );
}
