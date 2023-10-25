import { useContext, forwardRef } from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import styled, { Interpolation } from "@emotion/styled";
import { ThemeContext } from "../CustomeThemeProvider";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";
import { Snackbar } from "@mui/material";

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
      <CustomButton onClick={handleClick}>Open snackbar</CustomButton>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <StyledAlert onClose={handleClose} type="success">
          This is a success message!
        </StyledAlert>
      </Snackbar>

      <StyledAlert type="error" severity={type}>
        This is an error message!
      </StyledAlert>
      <StyledAlert type="warning" severity={type}>
        This is a warning message!
      </StyledAlert>
      <StyledAlert type="info" severity={type}>
        This is an information message!
      </StyledAlert>
      <StyledAlert type="success" severity={type}>
        This is a success message!
      </StyledAlert>
    </Stack>
  );
}
