import React from "react";
import { Text, View, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";
import { Octicons } from "@expo/vector-icons";

export default function Contact({ colorTheme, title }) {
  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "#fff";
    secondaryLinearGradientColor = "grey";
  }

  let [fontsLoaded] = useFonts({
    Orbitron_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
      >
        <Text
          style={{
            paddingTop: 50,
            fontSize: 30,
            color: colorTheme,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Orbitron_500Medium",
          }}
        >
          {title}
        </Text>

        <View
          style={{
            backgroundColor: colorTheme === "#000" ? "grey" : "#8F2F2F",
            width: 180,
            height: 180,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderRadius: "100%",
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../assets/src/mail.png")}
          />
        </View>
      </LinearGradient>
    );
  }
}
