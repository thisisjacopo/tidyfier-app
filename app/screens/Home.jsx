//* IMPORTS
import React, { useEffect, useContext } from "react";
import { View, Button } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";
import { UserContext } from "../context/UserContext";

const Home = ({ navigation }) => {
  //* VARIABLES
  const { user } = useContext(UserContext);

  return (
    <View style={screensStyles}>
      <BigText text={`Welcome Home ${user.username}`} />
    </View>
  );
};

export default Home;
