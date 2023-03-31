import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiFillDelete } from "react-icons/ai";
import { Content } from "antd/es/layout/layout";
import {Button} from "antd";

export default function TableComponent({ data , onDelete}: { data: any, onDelete: any }) {

  const kbtomb = (kb: number) => {
    //bytes to mb
    return kb / 1024 / 1024;
  };

  const columns: ColumnsType<any> = [
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "File Size",
      dataIndex: "fileSize",
      key: "fileSize",
      render(value, record, index) {
        return <span>{kbtomb(value).toFixed(2)} MB</span>;
      },
    },

    {
      title: "Uploaded At",
      dataIndex: "createdAt",
      key: "createdAt",
      render(value, record, index) {
        return <span>{new Date(value).toLocaleString()}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="large">
          <Button type="text" size="large" danger onClick={() => onDelete(record.key)}>
            <AiFillDelete />
          </Button>
        </Space>
      ),
    },
  ];

  const row = data?.data?.map((file: any) => {
    return {
      key: file.id,
      fileName: file.fileName,
      fileSize: file.fileSize,
      path: file.path,
      createdAt: file.createdAt,    };
  });



  return(
    <Content
    style={{
      padding: "0 50px",
      marginTop: 64,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Table dataSource={row} columns={columns} />;
  </Content>
  )
}

