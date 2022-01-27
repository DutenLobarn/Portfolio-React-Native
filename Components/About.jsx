import React from "react";
import { Text, View, Linking } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

import { useTranslation } from "react-i18next";

export default function About({ colorTheme, title }) {
  const { t } = useTranslation();

  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "#fff";
    secondaryLinearGradientColor = "grey";
  }

  const textPart = (text) => {
    return (
      <Text
        style={{
          color: colorTheme === "#000" ? "#000" : "#fff",
          fontSize: 18,
          paddingTop: 10,
          paddingBottom: 10,
          lineHeight: 25,
        }}
      >
        {text}
      </Text>
    );
  };

  return (
    <LinearGradient
      colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
    >
      <View style={{ paddingVertical: 128, height: "100%", padding: 30 }}>
        <Text
          style={{
            position: "absolute",
            top: 49,
            alignSelf: "center",
            fontSize: 30,
            color: colorTheme,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>

        {textPart(t("aboutPage.textPart1"))}
        {textPart(t("aboutPage.textPart2"))}
        {textPart(t("aboutPage.textPart3"))}
        {textPart(t("aboutPage.textPart4"))}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            marginTop: 40,
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
        </View>
      </View>
    </LinearGradient>
  );
}
