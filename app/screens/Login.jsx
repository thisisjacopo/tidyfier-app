//* IMPORTS
import React, { useState, useEffect, useContext } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";
import { colors } from "../styles/colors";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Login = ({ navigation }) => {
  //* VARIABLES
  const { email, setEmail, password, setPassword, setUser } =
    useContext(UserContext);
  const [disabled, setDisabled] = useState(true);
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //* FUNCTIONS

  const handleSubmitLoginForm = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(response.data);
      setUser(response.data);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e, "error while submitting login form");
    }
  };

  useEffect(() => {
    if (password.length > 4 && regex.test(email)) {
      setDisabled(false);
    }
  }, [password, email]);

  return (
    <View style={screensStyles}>
      <BigText text={"Im login screen"} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(value) => setPassword(value)}
      />
      <MainBtn
        disabled={disabled}
        style={{
          backgroundColor: disabled
            ? `${colors.disabledBtn}`
            : `${colors.primaryBtn}`,
        }}
        name={"Login"}
        onPress={() => handleSubmitLoginForm()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: `${colors.primaryInput}`,
    margin: 10,
    padding: 8,
    color: `${colors.primaryText}`,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Login;
