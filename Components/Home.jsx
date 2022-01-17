import React from "react";
import { Text, View, ImageBackground, StyleSheet, } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/kontor.png')} resizeMode="cover" style={styles.image}>

        <Entypo style={{ width: 50, height: 50, }} name="sweden" size={35} color="blue" />

        <View>
          <Text>Cuong</Text>
          <Text> FrontEnd</Text>
          <Text> Web and App</Text>
          <Text> Development</Text>
        </View>

        <FontAwesome name="sun-o" size={24} color="orange" />

      </ImageBackground>



    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
  },
});