import { Button } from "antd";
import React, { ReactNode } from "react";
import "./style.scss";

export interface QButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  icon?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
  dashed?: boolean;
  link?: boolean;
  type?: "info" | "success" | "warning" | "error";

  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const QButton = React.forwardRef<any, QButtonProps>((props, ref) => {
  let type:
    | "primary"
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "dashed"
    | undefined = undefined;
  let className: "q-btn_primary" | "q-btn_secondary" | "q-btn_default" =
    "q-btn_default";
  if (props.primary) {
    type = "primary";
    className = "q-btn_primary";
  } else if (props.secondary) {
    type = undefined;
    className = "q-btn_secondary";
  } else if (props.dashed) {
    type = "dashed";
  } else if (props.link) {
    type = "link";
  }

  if (props.type) {
    className += " q-button_" + props.type;
  } else {
    className += " q-button_info";
  }

  className += " os-button";

  return (
    <Button
      className={className + " " + props.className}
      ref={ref}
      type={type}
      onClick={props.onClick}
      icon={props.icon}
      disabled={props.disabled}
      loading={props.loading}
      style={props.style}
    >
      {props.children}
    </Button>
  );
});

export default QButton;
