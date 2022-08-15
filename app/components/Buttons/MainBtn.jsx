import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";
import { useFonts, Ubuntu_700Bold } from "@expo-google-fonts/dev";

const MainBtn = (props) => {
  //*FONTS
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  //* STYLES
  const StyledBtn = styled.TouchableOpacity`
    font-family: "Ubuntu_700Bold";
    color: ${colors.primaryText};
    font-size: 20px;
    background-color: ${colors.primaryBtn};
    text-align: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
    font-weight: 600;
    height: 50px;
    border-radius: 14px;
  `;

  return <StyledBtn {...props}> {props.name} </StyledBtn>;
};

export default MainBtn;
