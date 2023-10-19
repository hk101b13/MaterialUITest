import CustomButton from "./CustomButton/CustomButton";
import { CustomTable } from "./CustomTable";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./ThemeCustomeProvider";

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
            isLoading={true}
            customStyle={{
              backgroundColor: "pink",
              "&:hover": { color: "white !important" },
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
