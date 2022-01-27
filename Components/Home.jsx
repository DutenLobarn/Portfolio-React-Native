import React, { useState } from "react";

import { Text, View, ImageBackground } from "react-native";

import AppLoading from "expo-app-loading";

import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

import { useTranslation } from "react-i18next";

import TypeWriter from "react-native-typewriter";

export default function Home({ colorTheme }) {
  const { t } = useTranslation();

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
            {t("homePage.name")}
          </Text>

          <TypeWriter
            typing={1}
            style={{
              textAlign: "center",

              fontSize: 25,
              color: colorTheme,
              fontFamily: "Orbitron_500Medium",
            }}
          >
            {t("homePage.frontEnd")}
            {"\n"}
            <Text
              style={{
                fontSize: 25,
                color: colorTheme,
                fontFamily: "Orbitron_500Medium",
                lineHeight: 38,
              }}
            >
              {t("homePage.webApp")}
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: colorTheme,
                fontFamily: "Orbitron_500Medium",
              }}
            >
              {"\n"}
              {t("homePage.development")}
            </Text>
          </TypeWriter>
        </View>
      </ImageBackground>
    );
  }
}
