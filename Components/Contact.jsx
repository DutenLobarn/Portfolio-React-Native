import React, { useState } from "react";
import { Text, View, Image, Button, TextInput } from "react-native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

export default function Contact({ colorTheme, title }) {
  const [firstName, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(firstName);
  console.log(Lastname);
  console.log(email);
  console.log(message);

  const textInput = (text, setText) => {
    return (
      <TextInput
        placeholder={text}
        placeholderTextColor={
          colorTheme === "#000" ? "#rgba(0, 0 ,0, 0.5)" : "#8F2F2F"
        }
        onChangeText={(text) => {
          {
            setText;
          }
          text;
        }}
        style={{
          backgroundColor: "grey",
          padding: 10,
          width: "80%",
          alignSelf: "center",
          textAlign: "center",
          borderRadius: 10,
          marginTop: 10,
        }}
      />
    );
  };

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

        <View
          style={{
            backgroundColor: colorTheme === "#000" ? "grey" : "#8F2F2F",
            width: 180,
            height: 180,
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            borderRadius: "100%",
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={require("../assets/src/mail.png")}
          />
        </View>

        <View>
          {textInput("Firstname", setFirstName)}
          {textInput("Lastname", setLastName)}

          <TextInput
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={{
              backgroundColor: "grey",
              padding: 10,
              width: "80%",
              alignSelf: "center",
              textAlign: "center",
              borderRadius: 10,
              marginTop: 10,
            }}
          />

          <TextInput
            placeholder="Message"
            onChangeText={(text) => {
              setMessage(text);
            }}
            style={{
              backgroundColor: "grey",
              paddingTop: 10,
              paddingBottom: 50,
              paddingLeft: 10,
              paddingRight: 10,
              width: "80%",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>
      </LinearGradient>
    );
  }
}
