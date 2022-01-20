import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Skills({ colorTheme, title }) {
  const element = (
    title,
    imagePath,
    starsColor1,
    starsColor2,
    starsColor3,
    starsColor4,
    starsColor5
  ) => {
    return (
      <View
        style={{
          flex: 1,
          height: 70,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            color: colorTheme === "#000" ? "#000" : "#fff",
            paddingBottom: 4,
          }}
        >
          {title}
        </Text>
        <Image
          resizeMode="stretch"
          style={{
            width: 30,
            height: 30,
            alignSelf: "center",
            marginBottom: 5,
            borderRadius: 5,
          }}
          source={imagePath}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="star" size={10} color={starsColor1} />
          <FontAwesome name="star" size={10} color={starsColor2} />
          <FontAwesome name="star" size={10} color={starsColor3} />
          <FontAwesome name="star" size={10} color={starsColor4} />
          <FontAwesome name="star" size={10} color={starsColor5} />
        </View>
      </View>
    );
  };

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
        style={{ width: "100%", height: "100%" }}
        colors={[mainLinearGradientColor, secondaryLinearGradientColor]}
      >
        <ScrollView>
          <Text
            style={{
              flex: 1,
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

          <View
            style={{
              flex: 1,
              position: "absolute",
              width: "100%",
              height: 50,
              top: 130,
              display: "flex",
              flexDirection: "row",

              justifyContent: "space-evenly",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  alignSelf: "center",
                  color: colorTheme === "#000" ? "#000" : "#fff",
                }}
              >
                Student
              </Text>
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
              <Text
                style={{
                  alignSelf: "center",
                  color: colorTheme === "#000" ? "#000" : "#fff",
                }}
              >
                Entry
              </Text>
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
              <Text
                style={{
                  alignSelf: "center",
                  color: colorTheme === "#000" ? "#000" : "#fff",
                }}
              >
                Junior
              </Text>
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
              <Text
                style={{
                  alignSelf: "center",
                  color: colorTheme === "#000" ? "#000" : "#fff",
                }}
              >
                Senior
              </Text>
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
              <Text
                style={{
                  alignSelf: "center",
                  color: colorTheme === "#000" ? "#000" : "#fff",
                }}
              >
                Master
              </Text>
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

          <Text
            style={{
              position: "absolute",
              top: 160,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
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
            {element(
              " Figma",
              require("../assets/src/figma.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
          </View>
          <Text
            style={{
              position: "absolute",
              top: 250,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
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
            {element(
              " HTML5",
              require("../assets/src/html.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "CSS",
              require("../assets/src/css.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "SASS",
              require("../assets/src/sass.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "JavaScript",
              require("../assets/src/javascript.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "React",
              require("../assets/src/react.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
          </View>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "10%",
              top: 355,
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Redux",
              require("../assets/src/redux.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
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
            }}
          >
            APP
          </Text>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "10%",
              top: 450,
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Native",
              require("../assets/src/native.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
          </View>
          <Text
            style={{
              position: "absolute",
              top: 500,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
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
              top: 530,
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Node.JS",
              require("../assets/src/node.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "Express",
              require("../assets/src/express.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "Strapi",
              require("../assets/src/strapi.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
          </View>
          <Text
            style={{
              position: "absolute",
              top: 600,
              fontSize: 20,
              color: colorTheme,
              fontWeight: "bold",
              alignSelf: "center",
              fontFamily: "Orbitron_500Medium",
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
              top: 630,
              display: "flex",
              flexDirection: "row",
            }}
          >
            {element(
              "Mongo DB",
              require("../assets/src/mongodb.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
            {element(
              "Mongoose",
              require("../assets/src/mongoose.png"),
              "yellow",
              "yellow",
              "yellow",
              "yellow",
              "yellow"
            )}
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
