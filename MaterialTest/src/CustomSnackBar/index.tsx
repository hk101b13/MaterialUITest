import { useContext, forwardRef } from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import styled, { Interpolation } from "@emotion/styled";
import { ThemeContext } from "../ThemeCustomProvider";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import { useTranslation } from "react-i18next";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  type: "error" | "warning" | "info" | "success";
}

export default function CustomizedSnackbars(props: Props) {
  const { type } = props;
  const { colorScheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const StyledAlert = styled(Alert)<Props>`
    ${(props) => ({
      backgroundColor:
        props.type === "error"
          ? colorScheme?.text || "pink"
          : props.type === "warning"
          ? colorScheme?.accent || "lightyellow"
          : props.type === "info"
          ? colorScheme?.secondary || "lightblue"
          : props.type === "success"
          ? colorScheme?.main || "lightgreen"
          : "",
      color: props.type === "success" ? colorScheme?.text || "black" : "white",
    })}
  `;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "50%" }}>
      <CustomButton onClick={handleClick}>{t("Open_snackbar")}</CustomButton>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <StyledAlert onClose={handleClose} type="success">
          {t("Success_message")}
        </StyledAlert>
      </Snackbar>

      <StyledAlert type="error" severity={type}>
        {t("Error_message")}
      </StyledAlert>
      <StyledAlert type="warning" severity={type}>
        {t("Warning_message")}
      </StyledAlert>
      <StyledAlert type="info" severity={type}>
        {t("Info_message")}
      </StyledAlert>
      <StyledAlert type="success" severity={type}>
        {t("Success_message")}
      </StyledAlert>
    </Stack>
  );
}
