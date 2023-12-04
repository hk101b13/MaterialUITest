declare module "custom-button" {
  import React from "react";
  import { Interpolation, Theme } from "@emotion/react";
  import { ButtonProps } from "antd";

  export interface CustomizedButtonProps {
    customStyle?: Interpolation<Theme>;
  }

  const CustomButton: React.FC<CustomizedButtonProps & ButtonProps>;
  export { CustomButton };
}

declare module "custom-text" {
  import React from "react";
  import { ReactNode } from "react";
  import { CSSProperties } from "react";
  import { Interpolation, Theme } from "@emotion/react";

  interface customTextProps {
    level?: "t1" | "t2" | "t3" | "t4" | "t5";
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    customStyle?: Interpolation<Theme>;
  }

  const CustomButton: React.FC<customTextProps>;
  export { CustomButton };
}
