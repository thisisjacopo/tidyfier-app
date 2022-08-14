import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const StyledBtn = styled.TouchableOpacity`
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

const MainBtn = (props) => {
  return <StyledBtn {...props}> {props.name} </StyledBtn>;
};

export default MainBtn;
