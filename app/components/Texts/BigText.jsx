import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/dev";

const BigText = (props) => {
  //*FONTS
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  //* STYLES
  const StyledText = styled.Text`
    font-family: "Ubuntu_700Bold";
    font-size: 32px;
    color: ${colors.primaryText};
    text-align: center;
    font-weight: bold;
    margin: 8px;
  `;

  return <StyledText {...props}> {props.text} </StyledText>;
};

export default BigText;
