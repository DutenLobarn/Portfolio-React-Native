// React Native
import React, { useState } from "react";
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
} from "@expo/vector-icons";
// Components
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

export default function App() {
  const [colorTheme, setColorTheme] = useState("#7C2929");

  let navBackgroundColor = "#000";
  let iconFocusColor = "#C71B1B";
  if (colorTheme === "#000") {
    navBackgroundColor = "#fff";
    iconFocusColor = "grey";
  }

  const Tab = createBottomTabNavigator();

  console.log("color", colorTheme);
  console.log("nav", navBackgroundColor);

  return (
    <NavigationContainer>
      <Tab.Navigator
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
          children={() => <Projects colorTheme={colorTheme} />}
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
          children={() => <Skills colorTheme={colorTheme} />}
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
          children={() => <About colorTheme={colorTheme} />}
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
          children={() => <Contact colorTheme={colorTheme} />}
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

      <Entypo
        style={{
          position: "absolute",
          top: 50,
          left: 30,
          zIndex: 10,
          elevation: 10,
        }}
        name="sweden"
        size={40}
        color="blue"
      />

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
