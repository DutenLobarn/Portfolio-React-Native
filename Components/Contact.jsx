import React from "react";
import { Text, View } from "react-native";

export default function Contact({ colorTheme, title }) {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          top: 49,
          right: 165,
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
