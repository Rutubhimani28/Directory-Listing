import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box } from "@mui/material";
import Requests from "../../../services/Request";

const FileUpload = ({ onUpload, files }: any) => {
  const requestApiData = new Requests();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("files", file);
      });
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      onUpload([...uploadedFiles, ...acceptedFiles]);
      uploadFiles(formData);
    },
    [onUpload, uploadedFiles]
  );

  const uploadFiles = async (formData: FormData) => {
    try {
      const response = await requestApiData.postMultiImages(formData);
      console.log("Files uploaded successfully", response.data);
      // Handle the response as needed
      files(response.data);
    } catch (error) {
      console.error("Error uploading files", error);
      // Handle the error as needed
    }
  };

  const removeFile = (file: File) => {
    const updatedFiles = uploadedFiles.filter((f) => f !== file);
    setUploadedFiles(updatedFiles);
    onUpload(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  let img: any = "";
  if (uploadedFiles.length === 0) {
    img = uploadedFiles.map((item) => {});
  } else {
    img = uploadedFiles.map((file: any) => (
      <img
        key={file?.name}
        alt={file?.name}
        className="single-file-image"
        src={URL.createObjectURL(file)}
        width="100px"
        height="100px"
      />
    ));
  }

  return (
    <div>
      <div
        style={{
          border: "2px dashed #41414185",
          borderRadius: "5px",
          margin: "10px 0",
        }}
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {img.length ? (
          img
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            py="50px"
          >
            <FileUploadIcon />
            <span> Drag & drop some files here, or click to select files</span>
          </Box>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
