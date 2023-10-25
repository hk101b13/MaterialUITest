import { Switch, SwitchProps } from "antd";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../CustomeThemeProvider";
import { AddImportantToStyles } from "../CustomeThemeProvider";

interface CustomSwitchProps {
  customStyle?: Interpolation<Theme>;
}

const CustomSwitch = styled(Switch)(
  (props: CustomSwitchProps & SwitchProps) => {
    const { colorScheme } = useContext(ThemeContext);
    const baseStyle = {
      "&.ant-switch-checked": {
        backgroundColor: `${colorScheme?.accent || "pink"} !important`,
      },
      "&.ant-switch-checked .ant-switch-handle::before": {
        backgroundColor: `${colorScheme?.main || "#fff"}!important`,
      },
      "&.ant-switch-checked .ant-switch-loading-icon": {
        color: `${colorScheme?.text || "red"}!important`,
      },
      "& .ant-wave": {
        "--wave-color": `${colorScheme?.accent || "red"} !important`,
      },
    };
    const importantCustomStyle = AddImportantToStyles(props.customStyle);

    return [baseStyle, importantCustomStyle];
  }
);

export default function CustomSwitchComponent(
  props: SwitchProps & CustomSwitchProps
) {
  return <CustomSwitch {...props} />;
}
