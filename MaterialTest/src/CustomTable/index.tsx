import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CSSProperties } from "react";
import styled, { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeCustomeProvider";
import React from "react";

interface Props {
  autoScroll?: boolean;
  className?: string;
  columns?: ColumnsType<any> & ColumnsType;
  data?: any;
  maxHeight?: number;
  rowSelection?: any;
  style?: CSSProperties;
  rowClassName?: string | undefined;
  onRow?: any;
  rowHeight?: number;
  offset?: number;
  pageSize?: number;
  border?: boolean;
  locale?: object;
  loading?: boolean;
  customStyle?: Interpolation<Theme>;
  containerStyle?: Interpolation<Theme>;
  // rowColor?: string;
  // headerColor?: string;
  tableStyle?: {
    headerColor?: string;
    rowColor?: string;
    hoverRowColor?: string;
  };
}

export const CustomTable = (props: Props) => {
  const { theme } = React.useContext(ThemeContext);
  const currentTheme = theme ? theme : null;

  const StyleDiv = styled.div<Props>`
    ${(props) => props.containerStyle}
    ${{ marginTop: "10px", borderRadius: "8px" }}
  `;

  const StyledTable = styled(Table)<Props>`
    ${{
      borderRadius: "0 !important",
      cursor: "pointer",
      transition: "all 0.25s ease-in-out ",
      "& .ant-table-cell": {
        fontSize: `${currentTheme?.fontSize || 14}px`,
        color: `${
          currentTheme?.colorScheme?.contrastText || "black"
        } !important`,
      },

      "&:hover": { boxShadow: "2px 2px 5px 0px #AFB6B8" },
      "& .ant-table-container": {
        backgroundColor: `${
          props.tableStyle?.rowColor ||
          currentTheme?.colorScheme?.main ||
          "lightblue"
        } !important`,
      },

      "& .ant-table-cell-row-hover": {
        backgroundColor: `${
          props.tableStyle?.hoverRowColor ||
          currentTheme?.colorScheme?.accent ||
          "#99CCDD"
        } !important`,
      },

      "& .ant-table-thead .ant-table-cell": {
        backgroundColor: `${
          props.tableStyle?.headerColor ||
          currentTheme?.colorScheme?.secondary ||
          "#E0F2F1"
        } !important`,
      },

      "& .ant-table-thead .ant-table-cell::before": {
        backgroundColor: "black !important",
      },
    }}
    ${(props) => props.customStyle}
  `;

  return (
    <StyleDiv
      className={props.border === false ? "" : "border"}
      containerStyle={props.containerStyle}
    >
      <StyledTable
        columns={props.columns}
        className={props.className}
        loading={props.loading}
        pagination={false}
        scroll={{ y: "100%" }}
        dataSource={props.data}
        rowSelection={props.rowSelection}
        onRow={props.onRow}
        locale={props.locale}
        customStyle={props.customStyle}
      />
    </StyleDiv>
  );
};
