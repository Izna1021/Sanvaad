
<h1 align="center">Sanvaad</h1>

<!-- Project Description -->
<p align="center">This project demonstrates a simple file sharing application that allows users to upload files to Amazon Web Services (AWS) S3 using pre-signed URLs. It consists of a React front end for the user interface and a Node.js back end to handle file uploads and generate pre-signed URLs.</p>


## Features

- File upload to an AWS S3 bucket using pre-signed URLs.
- User-friendly React UI for file selection and upload.
- Easy integration with your AWS S3 bucket.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- AWS account with an S3 bucket created.
- AWS CLI configured with your AWS credentials.

## Setup Instructions

1. **Set Up the React Front End**

    ```bash
    npx create-react-app aws-s3-file-upload
    cd aws-s3-file-upload
    npm install aws-amplify @aws-amplify/ui-react
    # Configure AWS Amplify (run `amplify configure`)
    # Create `FileUploader.js` component and integrate it into your app.

    ```

2. **Set Up the Node.js Backend**

    ```bash
    mkdir aws-s3-server
    cd aws-s3-server
    npm init -y
    npm install express aws-sdk multer cors
    # Create `server.js` with the provided code.
    # Replace 'YOUR_ACCESS_KEY_ID', 'YOUR_SECRET_ACCESS_KEY', 'YOUR_S3_BUCKET_REGION', and 'YOUR_S3_BUCKET_NAME' with your AWS credentials and S3 bucket information.
    node server.js
    ```

3. **Connect React and Node.js**

    - Update the `FileUploader.js` component with the provided code.
    - Add the `/sign-s3` route to your Node.js server (update `server.js`).
    - Replace 'YOUR_S3_BUCKET_NAME' with your S3 bucket name.

4. **Run Your Application**

    - Start both your React and Node.js applications.
    - Access your React application in a web browser (typically at `http://localhost:3000`).
    - Upload a file using the file input and click the "Upload" button.

## Configuration

- Replace `'YOUR_ACCESS_KEY_ID'`, `'YOUR_SECRET_ACCESS_KEY'`, `'YOUR_S3_BUCKET_REGION'`, and `'YOUR_S3_BUCKET_NAME'` in `server.js` with your AWS credentials and S3 bucket information.

## Usage

1. Open the React app in your browser.
2. Choose a file using the file input.
3. Click the "Upload" button.
4. The file will be uploaded to your S3 bucket, and the URL will be logged in the console.


## Acknowledgments

- [AWS Amplify](https://aws.amazon.com/amplify/) - Simplifies AWS integration.
- [Multer](https://github.com/expressjs/multer) - Middleware for handling file uploads in Node.js.
- [Express.js](https://expressjs.com/) - Web application framework for Node.js.



