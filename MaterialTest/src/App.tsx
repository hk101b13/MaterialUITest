import CustomButton from "./CustomButton/CustomButton";
import { Antd } from "./Antd";
import { MUI } from "./MUI";
import { Bootstrap } from "./Bootstrap";
import { ThemeCustomProvider } from "./CustomeThemeProvider";
import CustomizedSnackbars from "./CustomSnackBar";
import { useTranslation } from "react-i18next";
import CustomSwitch from "./CustomSwitch";
import { RightOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { CustomTable } from "./CustomTable";

import "./style.scss";
import { useContext, useState } from "react";

const data = [
  {
    key: "0",
    username: "User_1",
    email: "user_1@gmail.com",
    description: "This is User 1.",
    arrow: <RightOutlined style={{ fontSize: "12px" }} />,
  },
  {
    key: "1",
    username: "User_2",
    email: "user_2@gmail.com",
    description: "This is User 2.",
    arrow: <RightOutlined style={{ fontSize: "12px" }} />,
  },
  {
    key: "2",
    username: "User_3",
    email: "user_3@gmail.com",
    description: "This is User 3.",
    arrow: <RightOutlined style={{ fontSize: "12px" }} />,
  },
  {
    key: "3",
    username: "User_4",
    email: "user_4@gmail.com",
    description: "This is User 4.",
    arrow: <RightOutlined style={{ fontSize: "12px" }} />,
  },
  {
    key: "4",
    username: "User_5",
    email: "user_5@gmail.com",
    description: "This is User 5.",
    arrow: <RightOutlined style={{ fontSize: "12px" }} />,
  },
];

function App() {
  const { t } = useTranslation();

  const [lang, setLang] = useState("ENG");

  const columns: ColumnsType = [
    {
      title: t("Username"),
      dataIndex: "username",
      key: "username",
      width: "20%",
      ellipsis: true,
      onCell: (record: any, index) => ({}),
    },
    {
      title: t("Email"),
      dataIndex: "email",
      key: "email",
      width: "25%",
      ellipsis: true,
      onCell: (record: any, index) => ({}),
    },
    {
      title: t("Description"),
      dataIndex: "description",
      key: "description",
      width: "50%",
      ellipsis: true,
      onCell: (record: any, index) => ({}),
    },
    {
      dataIndex: "arrow",
      key: "arrow",
      align: "center",
      width: "5%",
      onCell: (record: any, index) => ({}),
    },
  ];

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
        locale={lang}
        fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
      >
        <Antd />
        <h1>{t("Loading")}</h1>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "10px" }}>English</p>
          <CustomSwitch
            onChange={(e) => {
              setLang(e ? "CHT" : "ENG");
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
        fontFamily={"'Roboto Mono', monospace, 'Noto Serif TC', serif"}
      >
        <div>
          <div style={{ marginBottom: "50px" }}>
            {t("Description")}
            <h1>Custom Component</h1>
            <CustomButton
              onClick={() => {
                console.log("AAAA");
              }}
            >
              {t("Click")}
            </CustomButton>
          </div>

          <div style={{ marginBottom: "50px" }}>
            <h1>Ant Design Component</h1>

            <CustomTable
              columns={columns}
              tableStyle={{
                headerColor: "#FFC09F",
                rowColor: "#FCF5C7",
                hoverRowColor: "#FFEE93",
              }}
              dataSource={data}
              scroll={{ y: "250px" }}
            />
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
  );
}

export default App;
