import React from "react";
import { View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Nav({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="Projects"
        onPress={() => navigation.navigate("Projects")}
      />
      <Button title="Skills" onPress={() => navigation.navigate("Skills")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
      <Button title="Contact" onPress={() => navigation.navigate("Contact")} />
    </SafeAreaView>
  );
}
