import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      const result = await Storage.put(file.name, file, {
        contentType: file.type,
      });
      console.log('File uploaded successfully:', result.key);
      // You can do something with the uploaded file key here.
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
