import React from "react";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeCustomeProvider";
import QButton from "./QButton";

import "./style.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  customStyle?: Interpolation<Theme>;
  onClick?: () => void;
  isLoading?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { customStyle } = props;
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme ? theme : null;

  const MButton = styled(QButton)<CustomButtonProps>`
    ${{
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      boxShadow: "2px 2px 5px 0px #AFB6B8",
      transition: "all 0.25s ease-in-out ",
      marginLeft: "10px",
      backgroundColor: `${
        currentTheme?.colorScheme?.main || "lightblue"
      } !important`,
      fontSize: `${currentTheme?.fontSize || 14}px`,
      color: `${currentTheme?.colorScheme?.contrastText || "black"} !important`,
      "&:hover": {
        backgroundColor: `${
          currentTheme?.colorScheme?.accent || "pink"
        } !important`,
      },
      "& .ant-wave": {
        "--wave-color": `${
          currentTheme?.colorScheme?.accent || "lightgray"
        } !important`,
      },
    }}
    ${(props) => props.customStyle}
  `;

  return (
    <MButton customStyle={props.customStyle} onClick={props.onClick}>
      {props.children}
    </MButton>
  );
};

export default CustomButton;
