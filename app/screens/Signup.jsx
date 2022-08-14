//* IMPORTS
import React, { useState, useEffect, useContext } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import BigText from "../components/Texts/BigText";
import MainBtn from "../components/Buttons/MainBtn";
import { screensStyles } from "../styles/screensStyles";
import { colors } from "../styles/colors";
import { SignupContext } from "../context/SignupContext";
import axios from "axios";

const Signup = ({ navigation }) => {
  //* VARIABLES
  const {
    username,
    setUsername,
    email,
    setEmail,
    city,
    setCity,
    password,
    setPassword,
  } = useContext(SignupContext);
  const [disabled, setDisabled] = useState(true);
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  //* FUNCTIONS

  const handleSubmitSignupForm = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup",
        { username, email, password, city },
        { withCredentials: true }
      );
      console.log(response.data)
    } catch (e) {
      console.log(e, "error while submitting signup form");
    }
  };

  useEffect(() => {
    if (
      password.length > 4 &&
      username.length > 4 &&
      regex.test(email) &&
      city.length > 2
    ) {
      setDisabled(!disabled);
    }
  }, [password, email, username, city]);

  return (
    <View style={screensStyles}>
      <BigText text={"Im signup screen"} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(value) => setCity(value)}
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
        name={"Signup"}
        onPress={() => handleSubmitSignupForm()}
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

export default Signup;
