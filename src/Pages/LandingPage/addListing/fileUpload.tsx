import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box } from "@mui/material";

const FileUpload = ({ onUpload }: any) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      onUpload([...uploadedFiles, ...acceptedFiles]);
    },
    [onUpload, uploadedFiles]
  );

  const removeFile = (file: File) => {
    const updatedFiles = uploadedFiles.filter((f) => f !== file);
    setUploadedFiles(updatedFiles);
    onUpload(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  let img: any = "";
  if (uploadedFiles.length == 0) {
    img = uploadedFiles.map((item) => {
    });
    //   <img
    //     className="single-file-image"
    //     src={uploadedFiles}
    //     width="100px"
    //     height="100px"
    //   />
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
        {/* <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          py="50px"
        >
          <FileUploadIcon />
          Drag & drop some files here, or click to select files
        </Box> */}

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
      {/* <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>
            {file.name}{" "}
            <button type="button" onClick={() => removeFile(file)}>
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FileUpload;
