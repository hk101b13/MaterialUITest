import { ColumnsType } from "antd/es/table";
import { RightOutlined } from "@ant-design/icons";
import { CustomTable } from "./CustomTable";
import { useTranslation } from "react-i18next";

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

export const Antd = () => {
  const { t } = useTranslation();

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
  );
};
