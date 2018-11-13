// const { readFileSync } = require('fs');
// const { resolve } = require('path');
const AWS = require('aws-sdk');

module.exports = ({
  Key,
  Body,
}) => {
  require('dotenv').config();
  const {
    accessKeyId,
    secretAccessKey,
    region,
    Bucket
  } = process.env

  AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region
  })

  const s3 = new AWS.S3();
  // const Body = readFileSync(resolve( process.cwd() ,'server', 'aaa.png'))
  const uploadInfo = { Bucket, Key, Body };

  s3.putObject(uploadInfo, (err, data) => {
    if (err) console.log(err, err.stack);
    else     console.log(data);
  });
}
