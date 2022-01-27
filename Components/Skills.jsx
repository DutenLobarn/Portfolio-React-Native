import React from "react";

import { Text, View, Image, ScrollView } from "react-native";

import AppLoading from "expo-app-loading";

import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

import { FontAwesome } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { useTranslation } from "react-i18next";

export default function Skills({ colorTheme, title }) {
  const { t } = useTranslation();
  // here I made a function so you can cut down code

  const element = (
    title,
    imagePath,
    starsColor1,
    starsColor2,
    starsColor3,
    starsColor4,
    starsColor5
  ) => {
    return (
      <View
        style={{
          flex: 1,
          height: 70,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: colorTheme === "#000" ? "#000" : "#fff",
            paddingBottom: 4,
          }}
        >
          {title}
        </Text>

        <Image
          resizeMode="stretch"
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
            marginBottom: 5,
            borderRadius: 5,
          }}
          source={imagePath}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="star" size={10} color={starsColor1} />
          <FontAwesome name="star" size={10} color={starsColor2} />
          <FontAwesome name="star" size={10} color={starsColor3} />
          <FontAwesome name="star" size={10} color={starsColor4} />
          <FontAwesome name="star" size={10} color={starsColor5} />
        </View>
      </View>
    );
  };

  //here I cut down code for level skills

  const levelSkills = (text) => {
    return (
      <Text
        style={{
          alignSelf: "center",
          color: colorTheme === "#000" ? "#000" : "#fff",
        }}
      >
        {text}
      </Text>
    );
  };

  // here I cut down code for skills headline title

  const skillsHeadLine = (headLineTitle) => {
    return (
      <Text
        style={{
          width: "100%",
          height: 50,
          fontSize: 20,
          color: colorTheme,
          fontWeight: "bold",
          paddingTop: 10,
          marginBottom: 10,
          fontFamily: "Orbitron_500Medium",
          textAlign: "center",
        }}
      >
        {headLineTitle}
      </Text>
    );
  };

  // here I made a varabier to toggle star color
  const colorStar = colorTheme === "#000" ? "#000" : "#fff";

  // here the toggle for dark and light mode background color with linear
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
        {/* here is the -knowledge- title */}
        <ScrollView style={{ flex: 1 }}>
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
          {/* here begin the whole wrap for knowledge explanation */}
          <View
            style={{
              height: 100,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            {/* here begin the whole wrap for student */}
            <View style={{ flex: 1 }}>
              {levelSkills("Student")}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="gold" />
              </View>
            </View>

            {/* here begin the whole wrap for Entry */}
            <View style={{ flex: 1 }}>
              {levelSkills("Entry")}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
              </View>
            </View>

            {/* here begin the whole wrap for Junior */}
            <View style={{ flex: 1 }}>
              {levelSkills("Junior")}

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
              </View>
            </View>

            {/* here begin the whole wrap for Senior */}
            <View style={{ flex: 1 }}>
              {levelSkills("Senior")}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
              </View>
            </View>

            {/* here begin the whole wrap for Master*/}
            <View style={{ flex: 1 }}>
              {levelSkills("Master")}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
                <FontAwesome name="star" size={10} color="gold" />
              </View>
            </View>
          </View>

          {/* here begin the whole wrap for UX */}
          {skillsHeadLine(t("skillsPage.ux"))}

          <View
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              " Figma",
              require("../assets/src/figma.png"),
              "gold",
              "gold",
              colorStar,
              colorStar,
              colorStar
            )}
          </View>

          {/* here begin the whole wrap for Frontend */}
          {skillsHeadLine(t("skillsPage.frontend"))}

          <View
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {element(
              " HTML5",
              require("../assets/src/html.png"),
              "gold",
              "gold",
              "gold",
              colorStar,
              colorStar
            )}
            {element(
              "CSS",
              require("../assets/src/css.png"),
              "gold",
              "gold",
              colorStar,
              colorStar,
              colorStar
            )}
            {element(
              "SASS",
              require("../assets/src/sass.png"),
              "gold",
              "gold",
              colorStar,
              colorStar,
              colorStar
            )}
            {element(
              "JavaScript",
              require("../assets/src/javascript.png"),
              "gold",
              "gold",
              "gold",
              colorStar,
              colorStar
            )}
            {element(
              "React",
              require("../assets/src/react.png"),
              "gold",
              "gold",
              "gold",
              colorStar,
              colorStar
            )}
          </View>

          <View
            style={{
              width: "20%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Redux",
              require("../assets/src/redux.png"),
              "gold",
              "gold",
              "gold",
              colorStar,
              colorStar
            )}
          </View>

          {/* here begin the whole wrap for APP */}
          {skillsHeadLine(t("skillsPage.app"))}

          <View
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Native",
              require("../assets/src/native.png"),
              "gold",
              "gold",
              colorStar,
              colorStar,
              colorStar
            )}
          </View>

          {/* here begin the whole wrap for backend */}
          {skillsHeadLine(t("skillsPage.backend"))}

          <View
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Node.JS",
              require("../assets/src/node.png"),
              "gold",
              colorStar,
              colorStar,
              colorStar,
              colorStar
            )}
            {element(
              "Express",
              require("../assets/src/express.png"),
              "gold",
              colorStar,
              colorStar,
              colorStar,
              colorStar
            )}
            {element(
              "Strapi",
              require("../assets/src/strapi.png"),
              "gold",
              "gold",
              colorStar,
              colorStar,
              colorStar
            )}
          </View>

          {/* here begin the whole wrap for Database */}
          {skillsHeadLine(t("skillsPage.database"))}

          <View
            style={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "row",
              marginBottom: 250,
            }}
          >
            {element(
              "Mongo DB",
              require("../assets/src/mongodb.png"),
              "gold",
              colorStar,
              colorStar,
              colorStar,
              colorStar
            )}
            {element(
              "Mongoose",
              require("../assets/src/mongoose.png"),
              "gold",
              colorStar,
              colorStar,
              colorStar,
              colorStar
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
