import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./screens/Home"
import DetailsScreen from "./screens/Details"
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./components/Nav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Nav />

      <StatusBar style="auto" />
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
