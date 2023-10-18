import CustomButton from "./CustomButton/CustomButton";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./CustomeThemeProvider";

import "./style.scss";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ marginBottom: "50px" }}>
        <ThemeCustomProvider theme={{ main: "green", contrastText: "white" }}>
          <h1>Custom Component</h1>
          <CustomButton
            isLoading={true}
            customStyle={{
              backgroundColor: "pink",
              "&:hover": { backgroundColor: "lightblue" },
            }}
          >
            Click
          </CustomButton>
        </ThemeCustomProvider>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Ant Design Component</h1>
        <Antd />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Material UI Component</h1>
        <MUI />
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Bootstrap Component</h1>
        <Bootstrap />
      </div>
    </div>
  );
}

export default App;
