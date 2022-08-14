//* IMPORTS
import React, { useEffect, useContext } from "react";
import { View, Button } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";


const Landing = ({ navigation }) => {
  //* VARIABLES

  return (
    <View style={screensStyles}>
      <BigText text={"Welcome"} />
      <MainBtn name="Signup" onPress={() => navigation.navigate("Signup")} />
      <MainBtn name="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Landing;
