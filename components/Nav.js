import react from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Nav() {
  return (
    <View style={styles.h1}>
      <Text>Navbar</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    backgroundColor: "#000",
    width: "100 %",
    height: 100,
    fontSize: 50,
  },
});