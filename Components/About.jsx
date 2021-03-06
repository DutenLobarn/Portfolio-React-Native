import React, { useEffect, useRef } from "react";

import { Text, View, Linking, ScrollView, Animated } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

import AppLoading from "expo-app-loading";

import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

export default function About({ colorTheme, title }) {
  const { t } = useTranslation();

  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "#fff";
    secondaryLinearGradientColor = "grey";
  }

  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  const textPart = (text) => {
    return (
      <Animated.Text
        style={{
          color: colorTheme === "#000" ? "#000" : "#fff",
          fontSize: 18,
          paddingTop: 10,
          paddingBottom: 10,
          lineHeight: 25,
          opacity: fadeIn,
        }}
      >
        {text}
      </Animated.Text>
    );
  };

  let [fontsLoaded] = useFonts({
    Orbitron_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
        style={{ height: "100%" }}
        colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
      >
        <ScrollView>
          <View style={{ paddingTop: 128, height: "100%", padding: 30 }}>
            <Text
              style={{
                position: "absolute",
                top: 49,
                alignSelf: "center",
                fontSize: 30,
                color: colorTheme,
                fontWeight: "bold",
                fontFamily: "Orbitron_500Medium",
              }}
            >
              {title}
            </Text>

            {textPart(t("aboutPage.textPart1"))}
            {textPart(t("aboutPage.textPart2"))}
            {textPart(t("aboutPage.textPart3"))}
            {textPart(t("aboutPage.textPart4"))}

            <Animated.View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                marginTop: 40,
                opacity: fadeIn,
              }}
            >
              <AntDesign
                onPress={() => {
                  Linking.openURL(
                    "https://www.linkedin.com/in/mandus-lindstr%C3%B6m-3b2971136/"
                  );
                }}
                style={{
                  alignSelf: "center",
                }}
                name="linkedin-square"
                size={50}
                color={colorTheme}
              />
              <AntDesign
                onPress={() => {
                  Linking.openURL("https://github.com/DutenLobarn");
                }}
                style={{
                  alignSelf: "center",
                }}
                name="github"
                size={50}
                color={colorTheme}
              />
              <AntDesign
                onPress={() => {
                  Linking.openURL(
                    "https://docs.google.com/document/d/e/2PACX-1vSnoLv7SOIYFb8vdFk4qQMbO8CjGpElOxiOUInvUqTKCzaaytu12MiVFNwZc5yg-Vi_wPWqkVn8lvDx/pub"
                  );
                }}
                style={{
                  alignSelf: "center",
                }}
                name="pdffile1"
                size={50}
                color={colorTheme}
              />
            </Animated.View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
