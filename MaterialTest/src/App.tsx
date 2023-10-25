import CustomButton from "./CustomButton/CustomButton";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./CustomeThemeProvider";
import CustomizedSnackbars from "./CustomSnackBar";
import { useTranslation } from "react-i18next";
import CustomSwitch from "./CustomSwitch";

import "./style.scss";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ padding: "10px", backgroundColor: "#F3FFE1" }}>
      <ThemeCustomProvider
        colorScheme={{
          main: "#EFCFE3",
          secondary: "#EA9AB2",
          accent: "#E27396",
          text: "#320E3B",
        }}
        fontSize={{ h1: 22, h2: 18, h3: 16 }}
        lang={"zh-TW"}
        fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
      >
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "10px" }}>English</p>
          <CustomSwitch
            onChange={(e) => {
              setLang(e ? "zh-TW" : "en");
            }}
          />
          <p style={{ marginLeft: "10px" }}>繁體中文</p>
        </div>
        <br />
      </ThemeCustomProvider>

      <ThemeCustomProvider
        colorScheme={{
          main: "#EFCFE3",
          secondary: "#EA9AB2",
          accent: "#E27396",
          text: "#320E3B",
        }}
        fontSize={{ h1: 22, h2: 18, h3: 16 }}
        lang={lang}
        fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
      >
        <div style={{ marginBottom: "50px" }}>
          <h1>Custom Component</h1>
          <CustomButton
            customStyle={{
              color: "red !important",
            }}
            onClick={() => {
              console.log("AAAA");
            }}
          >
            {t("Click")}
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
