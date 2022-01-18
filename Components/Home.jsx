import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default function Home({ colorTheme }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/src/hero.png")}
        resizeMode="cover"
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 60,
          }}
        >
          <View
            style={{
              paddingTop: 40,
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
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
