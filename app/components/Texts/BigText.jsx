import React from "react";
import styled from "styled-components/native";
import { colors } from "../../styles/colors";

const StyledText = styled.Text`
  font-size: 32px;
  color: ${colors.primaryText};
  text-align: center;
  font-weight: bold;
`;

const BigText = (props) => {
  return <StyledText {...props}> {props.text} </StyledText>;
};

export default BigText;
