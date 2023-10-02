const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const cors = require('cors');

const app = express();

app.use(cors());

aws.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_S3_BUCKET_REGION',
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'YOUR_S3_BUCKET_NAME',
    acl: 'public-read',
    key: (request, file, cb) => {
      cb(null, `uploads/${Date.now()}-${file.originalname}`);
    },
  }),
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully' });
});

app.get('/sign-s3', (req, res) => {
  const { fileName, fileType } = req.query;
  const s3Params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: `uploads/${Date.now()}-${fileName}`,
    Expires: 60, // URL expiration time in seconds
    ContentType: fileType,
    ACL: 'public-read', // Make the file public
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.error(err);
      res.json({ success: false, error: err });
    } else {
      const returnData = {
        signedRequest: data,
        url: `https://${'YOUR_S3_BUCKET_NAME'}.s3.amazonaws.com/${s3Params.Key}`,
      };
      res.json({ success: true, data: returnData });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//Please make sure to replace 'YOUR_ACCESS_KEY_ID', 'YOUR_SECRET_ACCESS_KEY', 'YOUR_S3_BUCKET_REGION', and 'YOUR_S3_BUCKET_NAME' with your own AWS credentials and S3 bucket information.
