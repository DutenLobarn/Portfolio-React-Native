import React from "react";
import { Text, View } from "react-native";
import Nav from "./Nav";

export default function Projects({ navigation }) {
  return (
    <View>
      <Text>Projects</Text>
      <Nav navigation={navigation} />
    </View>
  );
}
