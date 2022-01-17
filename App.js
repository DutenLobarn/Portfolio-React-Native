// CSS
import { StatusBar } from "expo-status-bar";
// React Native
import { StyleSheet, Text, View } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
/* import { createNativeStackNavigator } from "@react-navigation/native-stack"; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import icons
import {
  Ionicons, MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
// Components
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
// console.log(NavigationContainer);
/* const Stack = createNativeStackNavigator(); */
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000"
        }
      }}>

        <Tab.Screen name="Projects" component={Projects} options={{

          tabBarIcon: ({ focused }) => (
            <Entypo name="briefcase" size={24} color={focused ? "#C71B1B" : "#8F2F2F"} />
          ),
        }} />

        <Tab.Screen name="Skills" component={Skills} options={{

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="certificate" size={24} color={focused ? "#C71B1B" : "#8F2F2F"} />
          ),
        }} />

        <Tab.Screen name="Home" component={Home}
          options={{

            tabBarIcon: ({ focused }) => (
              <Ionicons name="ios-home" size={24} color={focused ? "#C71B1B" : "#8F2F2F"} />
            ),
          }} />

        <Tab.Screen name="About" component={About} options={{

          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="user-alt" size={24} color={focused ? "#C71B1B" : "#8F2F2F"} />
          ),
        }} />

        <Tab.Screen name="Contact" component={Contact} options={{

          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="quick-contacts-mail" size={24} color={focused ? "#C71B1B" : "#8F2F2F"} />
          ),
        }} />

      </Tab.Navigator >



    </NavigationContainer>
  );
}


