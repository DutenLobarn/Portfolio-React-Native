import React, { useState } from "react";
// React Native
import { Image, TouchableOpacity, View, Text } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
/* import { createNativeStackNavigator } from "@react-navigation/native-stack"; */
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

export default function App() {
  const Tab = createBottomTabNavigator();
  const [toggleFlag, setToggleFlag] = useState(false);

  const [flag, setFlag] = useState(require("./assets/src/swedishflag.png"));

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="briefcase"
                size={24}
                color={focused ? "#C71B1B" : "#8F2F2F"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Skills"
          component={Skills}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="certificate"
                size={24}
                color={focused ? "#C71B1B" : "#8F2F2F"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                size={24}
                color={focused ? "#C71B1B" : "#8F2F2F"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={focused ? "#C71B1B" : "#8F2F2F"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="quick-contacts-mail"
                size={24}
                color={focused ? "#C71B1B" : "#8F2F2F"}
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
          height: 200,
        }}
      >
        <Image
          source={flag}
          style={{
            width: 35,
            height: 35,
            marginBottom: 10,
          }}
        />

        <AntDesign
          name="downcircleo"
          size={24}
          color="black"
          style={{ alignSelf: "center", marginBottom: 10 }}
        />

        {toggleFlag ? (
          <TouchableOpacity onPress={() => console.log("Image")}>
            <Text>
              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/albania.png")),
                    setToggleFlag(!toggleFlag);
                }}
              >
                <Image
                  source={require("./assets/src/albania.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/engelishflag.png")),
                    setToggleFlag(!toggleFlag);
                }}
              >
                <Image
                  source={require("./assets/src/engelishflag.png")}
                  style={{ width: 35, height: 35, paddingTop: 10, padding: 10 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/chinaflag.png")),
                    setToggleFlag(!toggleFlag);
                }}
              >
                <Image
                  source={require("./assets/src/chinaflag.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setFlag(require("./assets/src/swedishflag.png")),
                    setToggleFlag(!toggleFlag);
                }}
              >
                <Image
                  source={require("./assets/src/swedishflag.png")}
                  style={{ width: 35, height: 35 }}
                />
              </TouchableOpacity>
            </Text>
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </TouchableOpacity>
    </NavigationContainer>
  );
}
