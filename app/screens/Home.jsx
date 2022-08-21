//* IMPORTS
import React, { useEffect, useContext } from "react";
import { View, Button } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Home = ({ navigation }) => {
  //* VARIABLES
  const { user, setIsLoggedIn } = useContext(UserContext);

  //* FUNCTIONS
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth/logout", {
        withCredentials: true,
      });
      console.log(response.data);
      setIsLoggedIn(false);
      navigation.navigate("Landing");
    } catch (e) {
      console.error(e, "error at handle logout funciton");
    }
  };

  return (
    <View style={screensStyles}>
      <BigText
        id="welcome-home-user-text"
        text={`Welcome Home ${user.username}`}
      />
      <MainBtn
        id="home-logout-btn"
        name={"Logout"}
        onPress={() => handleLogout()}
      />
    </View>
  );
};

export default Home;
