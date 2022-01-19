import React, { useState } from "react";

import { Text, View, ImageBackground } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

export default function Home({ colorTheme }) {
  let [fontsLoaded] = useFonts({
    Orbitron_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
              fontFamily: "Orbitron_500Medium",
              paddingBottom: 20,
            }}
          >
            Mandus
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: colorTheme,
              fontFamily: "Orbitron_500Medium",
            }}
          >
            FrontEnd
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: colorTheme,
              fontFamily: "Orbitron_500Medium",
              lineHeight: 38,
            }}
          >
            Web och App
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: colorTheme,
              fontFamily: "Orbitron_500Medium",
            }}
          >
            Utveckling
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
