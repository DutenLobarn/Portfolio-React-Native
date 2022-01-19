import React from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { Text, View, ImageBackground, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Orbitron_500Medium } from '@expo-google-fonts/orbitron';

export default function Home() {

  let [fontsLoaded] = useFonts({
    Orbitron_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
                  fontFamily: "Orbitron_500Medium",
                  paddingBottom: 20,
                }}
              >
                Mandus
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: "#7C2929",
                  fontFamily: "Orbitron_500Medium",

                }}
              >
                FrontEnd
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: "#7C2929",
                  fontFamily: "Orbitron_500Medium",
                  lineHeight: 38,
                }}
              >
                Web och App
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  color: "#7C2929",
                  fontFamily: "Orbitron_500Medium",
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    flex: 1,
  },
});


