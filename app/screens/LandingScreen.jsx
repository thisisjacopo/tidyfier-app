//* IMPORTS
import React from "react";
import { View, Button } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";

const LandingScreen = ({ navigation }) => {
  //* VARIABLES

  return (
    <View style={screensStyles}>
      <BigText text={"Welcome"} />
      <MainBtn name="Sign up" onPress={() => navigation.navigate("Signup")} />
      <MainBtn name="Login" />
    </View>
  );
};

export default LandingScreen;
