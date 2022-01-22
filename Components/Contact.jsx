import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";
import { Formik } from "formik";
import * as yup from "yup";

// here is validation Schema and what happens if validation is incorrect
const reviewSchema = yup.object({
  FirstName: yup
    .string()
    .required("you must have at least 2 characters")
    .min(2),

  LastName: yup.string().required("you must have at least 2 characters").min(2),

  Email: yup.string().email("Email is required").required().min(2),

  Message: yup.string().required("you must have at least 8 characters").min(8),
});

export default function Contact({ colorTheme, title, btnBackground }) {
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
        <ScrollView>
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

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              {/* here are view for image */}
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
              {/* here is a view for form  */}
              <View>
                <Formik
                  initialValues={{
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Message: "",
                  }}
                  /* here is validation */
                  validationSchema={reviewSchema}
                  /* here is went you press button SEND then save data */
                  onSubmit={(values, actions) => {
                    actions.resetForm();
                  }}
                >
                  {(props) => (
                    <View>
                      <View>
                        {/* here is a text field Firstname*/}
                        <TextInput
                          placeholder="Firstname"
                          placeholderTextColor={
                            colorTheme === "#000"
                              ? "#rgba(0, 0 ,0, 0.5)"
                              : "#8F2F2F"
                          }
                          onBlur={props.handleBlur("FirstName")}
                          style={{
                            backgroundColor: "grey",
                            padding: 10,
                            width: "80%",
                            alignSelf: "center",
                            textAlign: "center",
                            borderRadius: 10,
                            marginTop: 10,
                          }}
                          onChangeText={props.handleChange("FirstName")}
                          value={props.values.FirstName}
                        />
                        {/* here is a text field Firstname required*/}
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "crimson",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          {props.touched.FirstName && props.errors.FirstName}
                        </Text>

                        {/* here is a text field Lastname*/}
                        <TextInput
                          placeholder="Lastname"
                          placeholderTextColor={
                            colorTheme === "#000"
                              ? "#rgba(0, 0 ,0, 0.5)"
                              : "#8F2F2F"
                          }
                          onBlur={props.handleBlur("LastName")}
                          style={{
                            backgroundColor: "grey",
                            padding: 10,
                            width: "80%",
                            alignSelf: "center",
                            textAlign: "center",
                            borderRadius: 10,
                            marginTop: 10,
                          }}
                          onChangeText={props.handleChange("LastName")}
                          value={props.values.LastName}
                        />
                        {/* here is a text field Lastname required*/}
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "crimson",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          {props.touched.LastName && props.errors.LastName}
                        </Text>

                        {/* here is a text field Email*/}
                        <TextInput
                          placeholder="Email"
                          placeholderTextColor={
                            colorTheme === "#000"
                              ? "#rgba(0, 0 ,0, 0.5)"
                              : "#8F2F2F"
                          }
                          onBlur={props.handleBlur("Email")}
                          style={{
                            backgroundColor: "grey",
                            padding: 10,
                            width: "80%",
                            alignSelf: "center",
                            textAlign: "center",
                            borderRadius: 10,
                            marginTop: 10,
                          }}
                          onChangeText={props.handleChange("Email")}
                          value={props.values.Email}
                        />
                        {/* here is a text field Email required*/}
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "crimson",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          {props.touched.Email && props.errors.Email}
                        </Text>

                        {/* here is a text field Message*/}
                        <TextInput
                          multiline={true}
                          textAlignVertical="top"
                          placeholder="Message"
                          placeholderTextColor={
                            colorTheme === "#000"
                              ? "#rgba(0, 0 ,0, 0.5)"
                              : "#8F2F2F"
                          }
                          onBlur={props.handleBlur("Message")}
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
                          onChangeText={props.handleChange("Message")}
                          value={props.values.Message}
                        />
                        {/* here is a text field Message required*/}
                        <Text
                          style={{
                            alignSelf: "center",
                            color: "crimson",
                            fontWeight: "bold",
                            marginBottom: 10,
                            marginTop: 6,
                          }}
                        >
                          {props.touched.Message && props.errors.Message}
                        </Text>
                      </View>

                      <View
                        style={{
                          backgroundColor: btnBackground,
                          marginTop: 10,
                          width: 100,
                          alignSelf: "center",
                          borderRadius: 50,
                        }}
                      >
                        <Button
                          title="SEND"
                          color={colorTheme === "#000" ? "#000" : "#8F2F2F"}
                          onPress={props.handleSubmit}
                        />
                      </View>
                    </View>
                  )}
                </Formik>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </LinearGradient>
    );
  }
}
