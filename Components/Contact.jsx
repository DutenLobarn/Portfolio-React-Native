import React from "react";
import { Text, View } from "react-native";
import Nav from "./Nav";

export default function Contact({ navigation }) {
  return (
    <View>
      <Text>Contact</Text>
      <Nav navigation={navigation} />
    </View>
  );
}
