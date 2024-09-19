const uploadImageToCloudinarypdf = async (file) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "test-app-doctor"); // Your preset
  uploadData.append("cloud_name", "dkupq69vj"); // This is not needed in the body

  const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkupq69vj/raw/upload",
      {
          method: "POST",
          body: uploadData,
      }
  );

  if (!res.ok) {
      throw new Error('Upload failed: ' + res.statusText); // Error handling
  }

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinarypdf;
