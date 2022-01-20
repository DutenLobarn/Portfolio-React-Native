import React from "react";
import { Text, View, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Skills({ colorTheme, title }) {
  let mainLinearGradientColor = "#000";
  let secondaryLinearGradientColor = "grey";
  if (colorTheme === "#000") {
    mainLinearGradientColor = "grey";
    secondaryLinearGradientColor = "#fff";
  }

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
        <View style={{ flex: 1 }}>
          <Text
            style={{
              position: "absolute",
              top: 50,
              fontSize: 30,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
            }}
          >
            {title}
          </Text>
          {/* här den wrapper för kunskuper visning */}
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "5%",

              top: 130,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Student</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Entry</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Junior</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Senior</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Master</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          {/* här sluta den wrapper för kunskuper visning */}
          <Text
            style={{
              position: "absolute",
              top: 160,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
              backgroundColor: "blue",
            }}
          >
            UX
          </Text>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "10%",
              backgroundColor: "grey",
              top: 190,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Figma</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/figma.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 260,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
              backgroundColor: "blue",
            }}
          >
            FrontEnd
          </Text>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "10%",
              backgroundColor: "grey",
              top: 285,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>HTML 5</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/html.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>CSS</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/css.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>SASS</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/sass.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>JavaScript</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/javascript.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",

                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>React</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/react.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              width: "40%",
              height: "10%",
              backgroundColor: "grey",
              top: 355,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Native</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/native.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 420,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
              backgroundColor: "blue",
            }}
          >
            APP
          </Text>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "10%",
              backgroundColor: "grey",
              top: 450,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 520,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
              backgroundColor: "blue",
            }}
          >
            BackEnd
          </Text>
          <View
            style={{
              position: "absolute",
              width: "60%",
              height: "10%",
              backgroundColor: "grey",
              top: 545,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
          <Text
            style={{
              position: "absolute",
              top: 615,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
              backgroundColor: "blue",
            }}
          >
            Database
          </Text>
          <View
            style={{
              position: "absolute",
              width: "40%",
              height: "10%",
              backgroundColor: "grey",
              top: 640,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ alignSelf: "center" }}>Redux</Text>
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: "center",
                  marginBottom: 5,
                }}
                source={require("../assets/src/redux.png")}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <FontAwesome name="star" size={10} color="yellow" />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
