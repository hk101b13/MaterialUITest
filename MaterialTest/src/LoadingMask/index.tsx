import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import styled, { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeCustomProvider";
import { useContext } from "react";
import { AddImportantToStyles } from "../ThemeCustomProvider";
import { Spin } from "antd";
import { SpinProps } from "antd";

interface Props {
  loading?: boolean;
  color?: { spinColor?: string; textColor?: string };
  customStyle?: Interpolation<Theme>;
  children?: ReactNode;
}

const StyledSpin = styled(Spin)<SpinProps & Props>(
  (props: SpinProps & Props) => {
    const { colorScheme } = useContext(ThemeContext);

    const baseStyle = {
      "&.ant-spin": {
        color: props.color?.textColor || colorScheme?.text || "red",
      },
      "& .ant-spin-dot-item": {
        backgroundColor: props.color?.spinColor || colorScheme?.accent || "red",
      },
    };
    const importantBaseStyle = AddImportantToStyles(baseStyle);
    const importantCustomStyle = AddImportantToStyles(props.customStyle);
    return [importantBaseStyle, importantCustomStyle];
  }
);

export const LoadingMask = (props: Props & SpinProps) => {
  return <StyledSpin {...props}>{props.children}</StyledSpin>;
};
