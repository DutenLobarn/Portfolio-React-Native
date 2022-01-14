import React from "react";
import { Text, View } from "react-native";
import Nav from "./Nav";

export default function Skills({ navigation }) {
  return (
    <View>
      <Text>Skills</Text>
      <Nav navigation={navigation} />
    </View>
  );
}
