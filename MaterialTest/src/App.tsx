// import CustomButton from "./CustomButton";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./ThemeCustomProvider";
import CustomizedSnackbars from "./CustomSnackBar";
import { useTranslation } from "react-i18next";
import CustomSwitch from "./CustomSwitch";
import { CustomText } from "./CustomText";
import ENG from "./ThemeCustomProvider/assets/i18n/ENG.json";
import CHT from "./ThemeCustomProvider/assets/i18n/CHT.json";
import ENG_1 from "./ENG.json";
import CHT_1 from "./CHT.json";
import { CustomizedButton } from "customized-module";
// import CustomButton from "./CustomButton";
import { CustomizedCowsay } from "custom-ts-component";
import { CustomButton } from "custom-component";
import { QButton, QThemeProvider, QSwitch, QColors } from "qsan-design-ui";
import { Radio } from "antd";

import "./style.scss";
import { useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const [lang_1, setLang_1] = useState("ENG");
  const [lang_2, setLang_2] = useState("ENG");
  const [buttonType, setButtonType] = useState<string>("info");
  const [buttonSize, setButtonSize] = useState<string>("small");

  console.log(CustomizedButton);
  console.log(QColors.palettes.error[100]);

  return (
    <div style={{ padding: "10px", backgroundColor: "#f0f3e8" }}>
      <QThemeProvider
        colorScheme={{
          main: "black",
          secondary: "#008392",
          accent: "lightgray",
          text: "white",
        }}
      >
        <QButton>AAA</QButton>
      </QThemeProvider>

      <CustomizedCowsay></CustomizedCowsay>
      <CustomizedButton></CustomizedButton>

      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "10px" }}>English</p>
        <CustomSwitch
          onChange={(e) => {
            i18n.changeLanguage(e ? "CHT" : "ENG");
          }}
        />
        <p style={{ marginLeft: "10px" }}>繁體中文</p>
      </div>

      <div
        style={{
          width: "1500px",
          padding: "10px",
          border: "2px dashed gray",
          borderRadius: "8px",
        }}
      >
        <div>
          <>Button Type: </>
          <Radio.Group
            defaultValue={"info"}
            options={["info", "warning", "error"]}
            optionType="button"
            buttonStyle="solid"
            onChange={(e) => {
              setButtonType(e.target.value);
            }}
          ></Radio.Group>
        </div>
        <br />
        <div>
          <>Button Size: </>
          <Radio.Group
            defaultValue={"small"}
            options={["small", "middle", "large"]}
            optionType="button"
            buttonStyle="solid"
            onChange={(e) => {
              setButtonSize(e.target.value);
            }}
          ></Radio.Group>
        </div>
        <br />
        <QButton
          qType={buttonType}
          qSize={buttonSize}
          onClick={() => {
            console.log("AAAA");
          }}
        >
          {t("Click")}
        </QButton>
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
                {t("Click")}
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
