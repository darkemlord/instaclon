require('dotenv').config({ path: '.env'});

const AWS = require('aws-sdk');
const ID = process.env.AWS_ID
const SECRET = process.env.AWS_SECRET
const BUCKET = process.env.AWS_BUCKET

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET
});

const awsUploadImage = async (file, filePath) => {
  const params = {
    Bucket: BUCKET,
    Key: `${filePath}`,
    Body: file
  }

  try {
    const response = await s3.upload(params).promise();
    return response.Location;
  } catch (err) {
    console.log(err)
    throw new Error()
  }
}

module.exports = awsUploadImage;
