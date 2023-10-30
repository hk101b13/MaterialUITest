import CustomButton from "./CustomButton/CustomButton";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./ThemeCustomProvider";
import CustomizedSnackbars from "./CustomSnackBar";
import { useTranslation } from "react-i18next";
import CustomSwitch from "./CustomSwitch";
import { RightOutlined } from "@ant-design/icons";
import { CustomText } from "./CustomText";
import ENG from "./ThemeCustomProvider/assets/i18n/ENG.json";
import CHT from "./ThemeCustomProvider/assets/i18n/CHT.json";
import ENG_1 from "./ENG.json";
import CHT_1 from "./CHT.json";

import "./style.scss";
import { useContext, useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [lang_1, setLang_1] = useState("ENG");
  const [lang_2, setLang_2] = useState("ENG");

  return (
    <div style={{ padding: "10px", backgroundColor: "#F3FFE1" }}>
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "10px" }}>English</p>
        <CustomSwitch
          onChange={(e) => {
            // setLang(e ? "CHT" : "ENG");
            i18n.changeLanguage(e ? "CHT" : "ENG");
          }}
        />
        <p style={{ marginLeft: "10px" }}>繁體中文</p>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <CustomButton
          onClick={() => {
            console.log("AAAA");
          }}
        >
          <CustomText level="t3">{t("Click")}</CustomText>
        </CustomButton>
      </div>
      <br />

      <div
        style={{
          width: "1500px",
          padding: "10px",
          border: "2px dashed gray",
          borderRadius: "8px",
        }}
      >
        <ThemeCustomProvider
          colorScheme={{
            main: "#EFCFE3",
            secondary: "#EA9AB2",
            accent: "#E27396",
            text: "#320E3B",
          }}
          fontSize={{ t1: 40, t2: 30, t3: 22, t4: 18, t5: 16 }}
          locale={lang_1}
          localeBundle={[
            { lng: "ENG", ns: "translation", resources: ENG },
            { lng: "CHT", ns: "translation", resources: CHT },
          ]}
          fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
        >
          <CustomText level="t1">Custom Component</CustomText>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>English</p>
            <CustomSwitch
              onChange={(e) => {
                setLang_1(e ? "CHT" : "ENG");
              }}
            />
            <p style={{ marginLeft: "10px" }}>繁體中文</p>
          </div>
          <br />
          <Antd />
          <br />
        </ThemeCustomProvider>
      </div>

      <br />

      <div
        style={{
          width: "1500px",
          padding: "10px",
          border: "2px dashed gray",
          borderRadius: "8px",
        }}
      >
        <ThemeCustomProvider
          colorScheme={{
            main: "#EFCFE3",
            secondary: "#EA9AB2",
            accent: "#E27396",
            text: "#320E3B",
          }}
          fontSize={{ t1: 40, t2: 30, t3: 22, t4: 18, t5: 16 }}
          fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
          locale={lang_2}
          localeBundle={[
            { lng: "ENG", ns: "translation", resources: ENG_1 },
            { lng: "CHT", ns: "translation", resources: CHT_1 },
          ]}
        >
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "10px" }}>English</p>
            <CustomSwitch
              onChange={(e) => {
                setLang_2(e ? "CHT" : "ENG");
              }}
            />
            <p style={{ marginLeft: "10px" }}>繁體中文</p>
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <CustomText level="t1">Custom Component</CustomText>
              <CustomButton
                onClick={() => {
                  console.log("AAAA");
                }}
              >
                <CustomText level="t3">{t("Click")}</CustomText>
              </CustomButton>
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
          </div>
        </ThemeCustomProvider>
      </div>
    </div>
  );
}

export default App;
