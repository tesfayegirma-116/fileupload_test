import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TableComponent from "./components/Table";
import { Layout } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadRequestOption as RcCustomRequestOptions } from "rc-upload/lib/interface";

import { uploadFile, getFiles, deleteFile } from "./api";

const { Dragger } = Upload;

const { Content } = Layout;

const App: React.FC = () => {
  const [files, setFiles] = useState([]);

  const [fileList, setFileList] = useState<any>([]);

  const handleUpload = async (options: any, event: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const { data } = await uploadFile(formData);
      onSuccess("Ok");
      setFileList(data);
    } catch (err) {
      onError({ err });
    }
  };

  const handleDelete = async (file: any) => {
    try {
      const { data } = await deleteFile(file);
      message.success("File Deleted Successfully");
      setFileList(data);
    } catch (err) {
      message.error("Something went wrong");
    }
  };

  const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(` file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`file upload failed.`);
    }
  };

  React.useEffect(() => {
    const fetchFiles = async () => {
      try {
        const { data } = await getFiles();
        setFiles(data);
      } catch (err) {
        message.error("Something went wrong");
      }
    };
    fetchFiles();
  }, [files]);

  const props: any = {
    name: "file",
    multiple: true,
    customRequest: handleUpload,
    onChange: handleChange,
    onRemove: handleDelete,
  };

  return (
    <>
      <Layout>
        <Navbar />
        <Content
          style={{
            padding: "0 50px",
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 380,
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files


              </p>
                MADE WITH ❤️ BY Tesfaye Girma 
            </Dragger>
            <TableComponent data={files} onDelete={handleDelete} />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default App;
