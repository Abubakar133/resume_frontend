import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const UploadComponent = () => {
  const [files, setFiles] = useState([]);
  
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const imgStyle = {
    display: "block",
    width: "auto",
    height: "100%",
  };

  // Handle file drop
  const onDrop = useCallback((acceptedFiles) => {
    const uploadPromises = acceptedFiles.map(async (file) => {
      let data = new FormData();
      data.append("file", file);

      try {
        let response = await axios.post("form/upload", data, {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
        return {
          ...file,
          preview: URL.createObjectURL(file),
          filename: response.data.filename,
        };
      } catch (err) {
        console.log("Error uploading file:", err);
        return file; // You can handle rejected files here if needed
      }
    });

    Promise.all(uploadPromises).then((completedFiles) => {
      setFiles(completedFiles);
    });
  }, []);

  // File preview UI
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={imgStyle} alt={file.name} />
      </div>
    </div>
  ));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // Restricting to images, adjust as needed
  });

  return (
    <div>
      <label>Upload Files or Screenshots</label>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #0087F7",
          borderRadius: 5,
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isDragActive ? "#f0f0f0" : "#fff",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            <div>Drop Files Here.</div>
            <button style={{ marginTop: 10 }}>Or Click to Select</button>
          </div>
        ) : (
          <div>
            <div>Drag and Drop Files here to Upload.</div>
            <button style={{ marginTop: 10 }}>Or Click to Select</button>
          </div>
        )}
      </div>

      {/* Thumbnails of uploaded files */}
      <aside style={thumbsContainer}>{thumbs}</aside>

      {/* Button to trigger file submission (placeholder for sending to another page) */}
      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={() => alert("File upload logic will be implemented later")}
      >
        Submit Files
      </button>
    </div>
  );
};

export default UploadComponent;
