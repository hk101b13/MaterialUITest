import React, { ReactNode, useContext } from "react";
import styled from "@emotion/styled";
import { AddImportantToStyles } from "../CustomeThemeProvider";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../CustomeThemeProvider";
import { Button, ButtonProps } from "antd";

interface CustomButtonProps {
  customStyle?: Interpolation<Theme>;
  children?: ReactNode;
  onClick: () => void;
}

const MButton = styled(Button)<CustomButtonProps & ButtonProps>(
  (props: CustomButtonProps & ButtonProps) => {
    const { colorScheme, fontSize, fontFamily } = useContext(ThemeContext);

    const baseStyles = {
      width: "auto",
      height: "auto",
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      boxShadow: "2px 2px 5px 0px #AFB6B8",
      transition: "all 0.25s ease-in-out",
      marginLeft: "10px",
      backgroundColor: `${colorScheme?.main || "lightblue"}`,
      fontSize: `${fontSize?.h2 || 14}px`,
      color: `${colorScheme?.text || "black"}`,
      fontFamily: fontFamily,
      "&:not(.ant-btn-loading):hover": {
        backgroundColor: `${colorScheme?.accent || "pink"}`,
        color: "white !important",
      },
      "& .ant-wave": {
        "--wave-color": `${colorScheme?.accent || "lightgray"} !important`,
      },
      "&.ant-btn-loading": { cursor: "not-allowed" },
    };

    const importantCustomStyles = AddImportantToStyles(props.customStyle);
    return [baseStyles, importantCustomStyles];
  }
);

const CustomButton = (
  customButtonProps: CustomButtonProps,
  props: ButtonProps
) => {
  const { children } = customButtonProps;

  return (
    <div>
      <MButton {...props} onClick={customButtonProps.onClick}>
        {children}
      </MButton>
    </div>
  );
};

export default CustomButton;
