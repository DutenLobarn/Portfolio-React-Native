import React, { useState } from "react";

import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  Pressable,
  Linking,
  Alert,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import { useTranslation } from "react-i18next";

import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

import AppLoading from "expo-app-loading";

export default function Projects({ colorTheme, btnBackground, title }) {
  const { t } = useTranslation();

  const [toggleProject1, setToggleProject1] = useState(false);
  const [toggleProject2, setToggleProject2] = useState(false);
  const [toggleProject3, setToggleProject3] = useState(false);
  const [toggleProject4, setToggleProject4] = useState(false);

  const image = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/storagerental.d587157f.png",
  };
  const image2 = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/landloard.fab95ab7.png",
  };
  const image3 = {
    uri: "https://mandus-portfolio-cv.herokuapp.com/static/media/sinuswebshop.a5e952bd.png",
  };
  const image4 = require("../assets/src/foretagssida-webshop.png");

  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "#fff";
    secondaryLinearGradientColor = "grey";
  }

  const project = (img, toggleProject, bolean) => {
    return (
      <Pressable onPress={() => toggleProject(!bolean)}>
        <ImageBackground
          source={img}
          resizeMode="stretch"
          style={{
            height: 300,
            width: 250,
            alignSelf: "center",
            marginBottom: 40,
          }}
        ></ImageBackground>
      </Pressable>
    );
  };

  const moreProjectInfo = (
    projectTitle,
    url,
    gitHubUrl,
    projectImg,
    projectDescriptionTitle,
    projectDescription,
    toggleProject,
    bolean
  ) => {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <LinearGradient
          colors={[mainLinearGradientColor, "#2E3138"]}
          style={{
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colorTheme,
          }}
        >
          <View
            style={{
              maxWidth: 270,
              padding: 20,
            }}
          >
            <Text
              style={{
                color: { colorTheme },
                alignSelf: "center",
                marginBottom: 20,
                fontSize: 24,
                color: colorTheme,
              }}
            >
              {projectTitle}
            </Text>
            <Pressable
              onPress={() => {
                if (url) {
                  Linking.openURL(url);
                } else {
                  Alert.alert(t("projectPage.alertWebPage"));
                }
              }}
            >
              <ImageBackground
                source={projectImg}
                resizeMode="stretch"
                style={{
                  height: 200,
                  width: 200,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              ></ImageBackground>
            </Pressable>
            <Text
              style={{
                alignSelf: "center",
                marginBottom: 10,
                fontSize: 20,
                color: colorTheme,
              }}
            >
              {projectDescriptionTitle}
            </Text>
            <Text
              style={{
                alignSelf: "center",
                marginBottom: 10,
                fontSize: 16,
                color: colorTheme,
              }}
            >
              {projectDescription}
            </Text>
            <AntDesign
              onPress={() => {
                if (gitHubUrl) {
                  Linking.openURL(gitHubUrl);
                } else {
                  Alert.alert(t("projectPage.alertProject"));
                }
              }}
              style={{
                alignSelf: "center",
                marginBottom: 10,
              }}
              name="github"
              size={30}
              color={colorTheme}
            />
            <Pressable
              onPress={() => toggleProject(!bolean)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                alignSelf: "center",
                backgroundColor: btnBackground,
                borderRadius: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: colorTheme,
                }}
              >
                {t("projectPage.btnText")}
              </Text>
            </Pressable>
          </View>
        </LinearGradient>
      </View>
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
        colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
      >
        <ScrollView contentContainerStyle={{ paddingTop: 128 }}>
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

          {project(image, setToggleProject1, toggleProject1)}
          {project(image2, setToggleProject2, toggleProject2)}
          {project(image3, setToggleProject3, toggleProject3)}
          {project(image4, setToggleProject4, toggleProject4)}
        </ScrollView>

        {toggleProject1 ? (
          moreProjectInfo(
            t("projectPage.storageModal.title"),
            "https://storage-rental.herokuapp.com/",
            "https://github.com/DutenLobarn/StorageRentalPage",
            image,
            t("projectPage.storageModal.projectTools"),
            t("projectPage.storageModal.projectDescription"),
            setToggleProject1,
            toggleProject1
          )
        ) : (
          <Text></Text>
        )}

        {toggleProject2 ? (
          moreProjectInfo(
            t("projectPage.landloardModal.title"),
            "https://mandus.herokuapp.com/",
            "https://github.com/DutenLobarn/App-for-a-landlord-company",
            image2,
            t("projectPage.landloardModal.projectTools"),
            t("projectPage.landloardModal.projectDescription"),
            setToggleProject2,
            toggleProject2
          )
        ) : (
          <Text></Text>
        )}

        {toggleProject3 ? (
          moreProjectInfo(
            t("projectPage.webshopModal.title"),
            "",
            "https://github.com/DutenLobarn/nackademin-slutprojekt-backend-Grupparbete-Domus",
            image3,
            t("projectPage.webshopModal.projectTools"),
            t("projectPage.webshopModal.projectDescription"),
            setToggleProject3,
            toggleProject3
          )
        ) : (
          <Text></Text>
        )}

        {toggleProject4 ? (
          moreProjectInfo(
            t("projectPage.bookLibraryModal.title"),
            "",
            "https://github.com/DutenLobarn/Projekt-foretagssida",
            image4,
            t("projectPage.bookLibraryModal.projectTools"),
            t("projectPage.bookLibraryModal.projectDescription"),
            setToggleProject4,
            toggleProject4
          )
        ) : (
          <Text></Text>
        )}
      </LinearGradient>
    );
  }
}
