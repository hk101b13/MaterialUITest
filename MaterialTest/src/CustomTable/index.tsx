import { Table, TableProps } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CSSProperties, useEffect, useState } from "react";
import styled, { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";
import { ThemeContext } from "../CustomeThemeProvider";
import { useContext } from "react";
import { AddImportantToStyles } from "../CustomeThemeProvider";

interface CustomTableProps {
  customStyle?: Interpolation<Theme>;
  tableStyle?: {
    headerColor?: string;
    rowColor?: string;
    hoverRowColor?: string;
  };
}

const StyledTable = styled(Table)(
  (props: CustomTableProps & TableProps<any>) => {
    const { colorScheme, fontSize, fontFamily } = useContext(ThemeContext);

    const baseStyle = {
      cursor: "pointer",
      color: "white",
      transition: "all 0.25s ease-in-out ",
      boxShadow: "2px 2px 5px 0px #AFB6B8",
      borderRadius: "8px",
      "& .ant-table-cell": {
        fontFamily: fontFamily || "",
        fontSize: `${fontSize?.h2 || 14}px`,
        color: `${colorScheme?.text || "black"}`,
      },
      "& .ant-table-container": {
        backgroundColor: `${
          props.tableStyle?.rowColor || colorScheme?.main || "lightblue"
        }`,
      },
      "& .ant-table-cell-row-hover": {
        backgroundColor: `${
          props.tableStyle?.hoverRowColor || colorScheme?.accent || "#99CCDD"
        } !important`,
      },
      "& .ant-table-thead .ant-table-cell": {
        backgroundColor: `${
          props.tableStyle?.headerColor || colorScheme?.secondary || "#E0F2F1"
        }`,
      },
      "& .ant-table-thead .ant-table-cell::before": {
        backgroundColor: "black",
      },
      "&&.ant-spin &&.ant-spin-dot-item": { color: "red" },
    };

    const importantCustomStyle = AddImportantToStyles(props.customStyle);
    return [baseStyle, importantCustomStyle];
  }
);

export const CustomTable = (props: CustomTableProps & TableProps<any>) => {
  return (
    <>
      <div style={{ width: "1000px" }}>
        <StyledTable
          tableStyle={props.tableStyle}
          pagination={false}
          {...props}
        />
      </div>
    </>
  );
};
