//* IMPORTS
import React, { useEffect, useContext } from "react";
import { View, Button } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Landing = ({ navigation }) => {
  //* VARIABLES
  const { user, setUser } = useContext(UserContext);

  //* FUNCTIONS
  const handleFetchUser = async () => {
    try {
      // const response = await axios.get("http://localhost:8000/auth/me", {
      //   withCredentials: true,
      // });
      // await setUser(response.data);
      return axios.get("http://localhost:8000/auth/me", {
        withCredentials: true,
      });
    } catch (e) {
      console.error(e, "error at fetching user function");
    }
  };

  useEffect(() => {
    let isCancelled = false;

    const handleChange = async () => {
      const response = await handleFetchUser();
      setUser(response.data);
      if (!isCancelled) {
        navigation.navigate("Home");
      }
    };
    handleChange();
    
    //Cleanup function is called when useEffect is called again or on unmount
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <View style={screensStyles}>
      <BigText text={"Welcome"} />
      <MainBtn name="Signup" onPress={() => navigation.navigate("Signup")} />
      <MainBtn name="Login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default Landing;
