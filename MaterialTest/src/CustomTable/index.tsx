import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CSSProperties } from "react";
import styled, { Interpolation } from "@emotion/styled";
import { Theme } from "@emotion/react";

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
}

const StyleDiv = styled.div<Props>`
  ${(props) => props.containerStyle}
`;

const StyledTable = styled(Table)<Props>`
  ${(props) => props.customStyle}
`;

export const CustomTable = (props: Props) => {
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
