import styled, { Interpolation } from "@emotion/styled";
import { CSSProperties, ReactNode, useContext } from "react";
import { Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeCustomProvider";
import { Typography, TypographyProps } from "antd";
import { AddImportantToStyles } from "../ThemeCustomProvider";

interface customTextProps {
  level?: "t1" | "t2" | "t3" | "t4" | "t5";
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  customStyle?: Interpolation<Theme>;
}

const StyledText = styled(Typography)((props: customTextProps) => {
  const { colorScheme, fontSize, fontFamily } = useContext(ThemeContext);
  const baseStyle = {
    color: `${colorScheme?.text} !important`,
    fontSize: `${
      props.level === "t1"
        ? fontSize?.t1
        : props.level === "t2"
        ? fontSize?.t2
        : props.level === "t3"
        ? fontSize?.t3
        : props.level === "t4"
        ? fontSize?.t4
        : props.level === "t5"
        ? fontSize?.t5
        : 18
    }px !important`,
  };
  const importantCustomStyle = AddImportantToStyles(props.customStyle);
  return [baseStyle, importantCustomStyle];
});

export const CustomText = (props: customTextProps) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
