import React, { useState } from "react";
// React Native
import { Image, TouchableOpacity, Text } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import icons
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
// Components
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
// I18next
import i18n from "./Locales/i18n.jsx";
import { t } from "i18next";

export default function App() {
  const [toggleFlag, setToggleFlag] = useState(false);
  const [flag, setFlag] = useState(require("./assets/src/swedishflag.png"));
  const [colorTheme, setColorTheme] = useState("#7C2929");

  let navBackgroundColor = "#000";
  let iconFocusColor = "#C71B1B";
  if (colorTheme === "#000") {
    navBackgroundColor = "#fff";
    iconFocusColor = "grey";
  }

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: navBackgroundColor,
          },
        }}
      >
        <Tab.Screen
          name="Projects"
          children={() => (
            <Projects
              colorTheme={colorTheme}
              btnBackground={navBackgroundColor}
              title={t("projectPage.title")}
            />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="briefcase"
                size={24}
                color={focused ? iconFocusColor : colorTheme}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          children={() => (
            <Skills colorTheme={colorTheme} title={t("skillsPage.title")} />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="certificate"
                size={26}
                color={focused ? iconFocusColor : colorTheme}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          children={() => <Home colorTheme={colorTheme} />}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                size={24}
                color={focused ? iconFocusColor : colorTheme}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          children={() => (
            <About
              colorTheme={colorTheme}
              title={t("aboutPage.title")}
              btnBackground={navBackgroundColor}
            />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-alt"
                size={22}
                color={focused ? iconFocusColor : colorTheme}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          children={() => (
            <Contact
              colorTheme={colorTheme}
              title={t("contactPage.title")}
              btnBackground={navBackgroundColor}
            />
          )}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="quick-contacts-mail"
                size={29}
                color={focused ? iconFocusColor : colorTheme}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity
        onPress={() => {
          setToggleFlag(!toggleFlag);
        }}
        style={{
          position: "absolute",
          top: 50,
          left: 30,
          width: 35,
        }}
      >
        <Image
          source={flag}
          style={{
            width: 35,
            height: 35,
            marginBottom: 10,
            resizeMode: "stretch",
            borderRadius: 5,
          }}
        />
        <AntDesign
          name="downcircleo"
          size={24}
          color={colorTheme}
          style={{ alignSelf: "center", marginBottom: 10 }}
        />

        {toggleFlag ? (
          <TouchableOpacity onPress={() => console.log("Image")}>
            <Text>
              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/albania.png")),
                    setToggleFlag(!toggleFlag);
                  i18n.changeLanguage("al");
                }}
              >
                <Image
                  source={require("./assets/src/albania.png")}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 5,
                    resizeMode: "stretch",
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/engelishflag.png")),
                    setToggleFlag(!toggleFlag);
                  i18n.changeLanguage("en");
                }}
              >
                <Image
                  source={require("./assets/src/engelishflag.png")}
                  style={{
                    width: 35,
                    height: 35,
                    paddingTop: 10,
                    padding: 10,
                    resizeMode: "stretch",
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/chinaflag.png")),
                    setToggleFlag(!toggleFlag);
                  i18n.changeLanguage("ch");
                }}
              >
                <Image
                  source={require("./assets/src/chinaflag.png")}
                  style={{
                    width: 35,
                    height: 35,
                    resizeMode: "stretch",
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/swedishflag.png")),
                    setToggleFlag(!toggleFlag);
                  i18n.changeLanguage("sw");
                }}
              >
                <Image
                  source={require("./assets/src/swedishflag.png")}
                  style={{
                    width: 35,
                    height: 35,
                    resizeMode: "stretch",
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            </Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </TouchableOpacity>

      {colorTheme === "#000" ? (
        <Entypo
          style={{
            position: "absolute",
            top: 50,
            right: 30,
            zIndex: 10,
            elevation: 10,
          }}
          name="moon"
          color={colorTheme}
          size={40}
          onPress={() => {
            setColorTheme("#7C2929");
          }}
        />
      ) : colorTheme === "#7C2929" ? (
        <Ionicons
          style={{
            position: "absolute",
            top: 50,
            right: 30,
            zIndex: 10,
            elevation: 10,
          }}
          name="sunny"
          size={40}
          color={colorTheme}
          onPress={() => {
            setColorTheme("#000");
          }}
        />
      ) : (
        ""
      )}
    </NavigationContainer>
  );
}
