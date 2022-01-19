import React from "react";
import { Text, View } from "react-native";

export default function About({ colorTheme, title }) {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          top: 49,
          right: 192,
          fontSize: 30,
          color: colorTheme,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
}
