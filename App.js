// CSS
// import { StatusBar } from "expo-status-bar";
// React Native
// import { StyleSheet, Text, View } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#000",
          },
        }}
      >
        <Tab.Screen
          name="Projects"
          component={Projects}
          options={{
            title: "Projects",
            // tabBarStyle: {
            //   backgroundColor: "#000",
            // },
            tabBarLabel: "",
            tabBarIcon: () => (
              <Entypo name="briefcase" size={24} color="#7C2929" />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={Skills}
          options={{
            title: "Skills",
            // tabBarStyle: {
            //   backgroundColor: "#000",
            // },
            tabBarLabel: "",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="certificate-outline"
                size={28}
                color="#8F2F2F"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            // headerStyle: {
            //   backgroundColor: "#000",
            // },
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="ios-home" size={25} color="#8F2F2F" />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: "About",
            // headerStyle: {
            //   backgroundColor: "#000",
            // },
            tabBarLabel: "",
            tabBarIcon: () => (
              <FontAwesome5 name="user-alt" size={22} color="#8F2F2F" />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contact",
            // headerStyle: {
            //   backgroundColor: "#000",
            // },
            tabBarLabel: "",
            tabBarIcon: () => (
              <MaterialIcons
                name="quick-contacts-mail"
                size={28}
                color="#8F2F2F"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
