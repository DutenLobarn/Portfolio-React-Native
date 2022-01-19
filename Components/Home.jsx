import React, { useState } from "react";

import { Text, View, ImageBackground } from "react-native";

export default function Home({ colorTheme }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/src/hero.png")}
      resizeMode="cover"
    >
      <View
        style={{
          paddingTop: 100,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: colorTheme,
            paddingBottom: 20,
          }}
        >
          Mandus
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: colorTheme,
          }}
        >
          FrontEnd
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: colorTheme,
            lineHeight: 38,
          }}
        >
          Web och App
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: colorTheme,
          }}
        >
          Utveckling
        </Text>
      </View>
    </ImageBackground>
  );
}
