import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>


      <ImageBackground
        style={styles.image}
        source={require("../assets/src/hero.png")}
        resizeMode="cover"
      >
        <View style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 45,
        }}>
          <Entypo
            style={{
              display: "flex",
            }}
            name="sweden"
            size={55}
            color="blue"
          />
          <View
            style={{
              paddingTop: 50,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#7C2929",
                fontFamily: "fantasy",
                paddingBottom: 20,
              }}
            >
              Mandus
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "#7C2929",
                fontFamily: "fantasy",

              }}
            >
              FrontEnd
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "#7C2929",
                fontFamily: "fantasy",
                lineHeight: 38,
              }}
            >
              Web och App
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "#7C2929",
                fontFamily: "fantasy",
              }}
            >
              Utveckling
            </Text>
          </View>
          <Ionicons

            name="sunny"
            size={55}
            color="#7C2929"
          />

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
