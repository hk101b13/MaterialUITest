import React from "react";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../CustomeThemeProvider";
import { Button } from "antd";

import "./style.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  customStyle?: Interpolation<Theme>;
  onClick?: () => void;
  isLoading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme ? theme : null;

  const defaultStyle = {
    // padding: "15px 30px",
    // fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: "2px 2px 5px 0px #AFB6B8",
    "&:hover": {
      color: "white !important",
      backgroundColor: "pink",
    },
    transition: "all 0.25s ease-in-out ",
    marginLeft: "10px",
    backgroundColor: currentTheme?.main || "lightblue",
    color: currentTheme?.contrastText || "black",
  };

  const MButton = styled(Button)<CustomButtonProps>`
    ${defaultStyle}
    ${(props) => props.customStyle}
  `;

  return (
    <MButton customStyle={props.customStyle} onClick={props.onClick}>
      {props.children}
    </MButton>
  );
};

export default CustomButton;
