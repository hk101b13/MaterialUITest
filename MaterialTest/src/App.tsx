import CustomButton from "./CustomButton/CustomButton";
import { CustomTable } from "./CustomTable";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./ThemeCustomeProvider";
import CustomizedSnackbars from "./CustomSnackBar";

import "./style.scss";

function App() {
  return (
    <div style={{ padding: "10px", backgroundColor: "#F3FFE1" }}>
      <ThemeCustomProvider
        theme={{
          colorScheme: {
            main: "#EFCFE3",
            secondary: "#EA9AB2",
            accent: "#E27396",
            contrastText: "#320E3B",
          },
          fontSize: 18,
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <h1>Custom Component</h1>
          <CustomButton
            onClick={() => {
              console.log("AAAA");
            }}
          >
            Click
          </CustomButton>
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h1>Ant Design Component</h1>
          <Antd />
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h1>Material UI Component</h1>
          <CustomizedSnackbars type="error" />
          <br />
          <MUI />
        </div>

        <div style={{ marginBottom: "50px" }}>
          <h1>Bootstrap Component</h1>
          <Bootstrap />
        </div>
      </ThemeCustomProvider>
    </div>
  );
}

export default App;
