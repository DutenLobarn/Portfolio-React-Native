import React from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,
} from "react-native";

import AppLoading from "expo-app-loading";

import { LinearGradient } from "expo-linear-gradient";

import { useFonts, Orbitron_500Medium } from "@expo-google-fonts/orbitron";

import { Formik } from "formik";

import * as yup from "yup";

import email from "react-native-email";

import { useTranslation } from "react-i18next";

// here is validation Schema and what happens if validation is incorrect
export default function Contact({ colorTheme, title, btnBackground }) {
  const { t } = useTranslation();

  const reviewSchema = yup.object({
    FirstName: yup.string().required(t("contactPage.firstNameRequired")),

    LastName: yup.string().required(t("contactPage.lastNameRequired")),

    Email: yup
      .string()
      .email(t("contactPage.emailRequired"))
      .required(t("contactPage.emailRequired")),

    Message: yup.string().required(t("contactPage.messageRequired")),
  });

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
                  borderRadius: 100,
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

                    const to = "mandus85@hotmail.com";
                    to === "mandus85@hotmail.com"
                      ? alert(t("contactPage.alertSent"))
                      : alert(t("contactPage.alertNotSent"));
                    email(to, {
                      cc: values.Email,
                      subject: t("contactPage.subject"),
                      body:
                        values.FirstName +
                        " " +
                        values.LastName +
                        "\n" +
                        values.Message,
                    }).catch(console.error);
                  }}
                >
                  {(props) => (
                    <View>
                      <View>
                        {/* here is a text field Firstname*/}
                        <TextInput
                          placeholder={t("contactPage.firstName")}
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
                          placeholder={t("contactPage.lastName")}
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
                          placeholder={t("contactPage.email")}
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
                          placeholder={t("contactPage.message")}
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
                      {/* here is the button for form  */}
                      <Pressable
                        onPress={props.handleSubmit}
                        style={{
                          paddingVertical: 10,
                          paddingHorizontal: 30,
                          alignSelf: "center",
                          backgroundColor: btnBackground,
                          borderRadius: 100,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            color: colorTheme,
                          }}
                        >
                          {t("contactPage.btnText")}
                        </Text>
                      </Pressable>
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
