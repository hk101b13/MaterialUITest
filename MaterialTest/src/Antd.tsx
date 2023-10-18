import { ColumnsType } from "antd/es/table";
import { RightOutlined } from "@ant-design/icons";
import { CustomTable } from "./CustomTable";

const columns: ColumnsType = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    width: "20%",
    ellipsis: true,
    onCell: (record: any, index) => ({}),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "25%",
    ellipsis: true,
    onCell: (record: any, index) => ({}),
  },
  {
    title: "Description",
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
  return (
    <>
      <CustomTable
        columns={columns}
        data={data}
        containerStyle={{
          width: "1000px",
          marginBottom: "20px",
          boxShadow: "0px 0px 6px 0px #AFB6B8",
          transition: "all 0.15s ease-in",
          "&:hover": {
            boxShadow: "0px 0px 10px 0px #AFB6B8",
            cursor: "pointer",
          },
        }}
        customStyle={{}}
      />
    </>
  );
};
