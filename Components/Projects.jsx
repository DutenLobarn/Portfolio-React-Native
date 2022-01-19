import React from "react";
import { Text, ScrollView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Projects({ colorTheme, title }) {
  const image = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/storagerental.d587157f.png",
  };
  const image2 = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/landloard.fab95ab7.png",
  };
  const image3 = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/sinuswebshop.a5e952bd.png",
  };
  const image4 = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/airbean.64ae95b3.png",
  };
  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "grey";
    secondaryLinearGradientColor = "#fff";
  }
  return (
    <LinearGradient
      colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
    >
      <ScrollView
        style={
          {
            // flex: 1,
            // flexGrow: 1,
            // height: "100%",
            // backgroundColor: "green",
            // marginBottom: -120,
          }
        }
        contentContainerStyle={{ paddingVertical: 128 }}
      >
        <Text
          style={{
            position: "absolute",
            top: 49,
            right: 169,
            fontSize: 30,
            color: colorTheme,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <ImageBackground
          source={image}
          resizeMode="stretch"
          style={{
            height: 300,
            width: 250,
            alignSelf: "center",
            marginBottom: 40,
          }}
          // imageStyle
        ></ImageBackground>
        <ImageBackground
          source={image2}
          resizeMode="stretch"
          style={{
            height: 300,
            width: 250,
            alignSelf: "center",
            marginBottom: 40,
          }}
        ></ImageBackground>
        <ImageBackground
          source={image3}
          resizeMode="stretch"
          style={{
            height: 300,
            width: 250,
            alignSelf: "center",
            flexDirection: "column",
            marginBottom: 40,
          }}
        ></ImageBackground>
        <ImageBackground
          source={image4}
          resizeMode="stretch"
          style={{
            height: 300,
            width: 250,
            alignSelf: "center",
            flexDirection: "column",
            marginBottom: 40,
          }}
        ></ImageBackground>
      </ScrollView>
    </LinearGradient>
  );
}
