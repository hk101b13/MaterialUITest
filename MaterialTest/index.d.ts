// index.d.ts
declare module "custom-button" {
  import React from "react";
  import { Interpolation, Theme } from "@emotion/react";
  import { ButtonProps } from "antd";

  export interface CustomButtonProps {
    customStyle?: Interpolation<Theme>;
  }

  const CustomButton: React.FC<CustomButtonProps & ButtonProps>;
  export { CustomButton };
}

declare module "custom-text" {
  import React from "react";
  import { ReactNode } from "react";
  import { CSSProperties } from "react";
  import { Interpolation, Theme } from "@emotion/react";

  interface CustomTextProps {
    level?: "t1" | "t2" | "t3" | "t4" | "t5";
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    customStyle?: Interpolation<Theme>;
  }

  const CustomText: React.FC<CustomTextProps>;
  export { CustomText };
}
