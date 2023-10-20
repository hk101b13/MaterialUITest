import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeCustomeProvider";
import { Button } from "antd";
import { ButtonProps } from "antd";

import "./style.scss";

interface CustomButtonProps {
  customStyle?: Interpolation<Theme>;

  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  icon?: ReactNode;

  type?: "info" | "success" | "warning" | "error";

  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CustomButton = (props: CustomButtonProps & ButtonProps) => {
  const { children, customStyle } = props;
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme || null;
  const { colorScheme, fontSize } = currentTheme;

  const MButton = styled(Button)<CustomButtonProps>`
    ${{
      width: "auto",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      boxShadow: "2px 2px 5px 0px #AFB6B8",
      transition: "all 0.25s ease-in-out ",
      marginLeft: "10px",
      backgroundColor: `${colorScheme?.main || "lightblue"}`,
      fontSize: `${fontSize || 14}px`,
      color: `${colorScheme?.contrastText || "black"}`,
      "&:hover": {
        color: "white !important",
        backgroundColor: `${colorScheme?.accent || "pink"}`,
      },
      "& .ant-wave": {
        "--wave-color": `${colorScheme?.accent || "lightgray"} !important`,
      },
    }}
  `;

  return (
    <div>
      <MButton
        className={props.className}
        onClick={props.onClick}
        icon={props.icon}
        disabled={props.disabled}
        loading={props.loading}
        style={props.style}
      >
        {children}
      </MButton>
    </div>
  );
};

export default CustomButton;
