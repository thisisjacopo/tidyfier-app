//* IMPORTS
import React from "react";
import { Button } from "@rneui/base";
import { View, Text } from "react-native";
import BigText from "../components/Texts/BigText";
import { screensStyles } from "../styles/screensStyles";

const LandingScreen = () => {
  //* VARIABLES

  return (
    <View style={screensStyles}>
      <BigText text={"Welcome"} />
      <Button title="Sign up" />
      <Button title="Login" />
      
    </View>
  );
};

export default LandingScreen;
