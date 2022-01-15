// CSS
import { StatusBar } from "expo-status-bar";
// React Native
import { StyleSheet, Text, View } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
/* import { createNativeStackNavigator } from "@react-navigation/native-stack"; */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
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


      <Tab.Navigator screenOptions={{ headerShown: false }} >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <Ionicons name="ios-home-outline" size={24} color="#8F2F2F" />
            ),
          }} />




        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Skills" component={Skills} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Contact" component={Contact} />

      </Tab.Navigator >



    </NavigationContainer>
  );
}


