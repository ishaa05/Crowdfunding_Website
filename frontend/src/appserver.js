import fs from 'fs';
import { google } from 'googleapis';
import apiKeysData from './apikeys.json' assert { type: 'json' };

// Access data from the JSON file
const apiKeys = apiKeysData;
const apiKey = apiKeys.apiKey;
console.log(apiKey);

const SCOPE = ['https://www.googleapis.com/auth/drive'];

async function authorize() {
  const jwtClient = new google.auth.JWT(
    apiKeys.client_email,
    null,
    apiKeys.private_key,
    SCOPE
  );
  await jwtClient.authorize();
  return jwtClient;
}

async function uploadFile(authClient) {
  console.log('Uploaded Successfully');
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth: authClient });
    const fileMetadata = {
      name: 'Material.pdf', // Set the desired file name
      parents: ['1Ehzl93daeuxLqZiEHC2EchZ1MK7nKiKR'], // Set the parent folder ID
    };
    const media = {
      body: fs.createReadStream('Material.pdf'), // Replace with the actual file path
      mimeType: 'application/pdf', // Set the correct MIME type for PDF files
    };
    drive.files.create(
      {
        resource: fileMetadata,
        media: media,
        fields: 'id',
      },
      (err, file) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(file);
      }
    );
  });
}

async function downloadFile(authClient, fileId, destination) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: 'v3', auth: authClient });
    const dest = fs.createWriteStream(destination);
    drive.files.get(
      {
        fileId: fileId,
        alt: 'media',
      },
      { responseType: 'stream' },
      (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        res.data
          .on('end', () => {
            resolve(destination);
          })
          .on('error', (err) => {
            reject(err);
          })
          .pipe(dest);
      }
    );
  });
}

authorize()
  .then((authClient) => {
    return uploadFile(authClient).then((file) => {
      return { authClient, fileId: file.data.id };
    });
  })
  .then(({ authClient, fileId }) =>
    downloadFile(
      authClient,
      fileId,
      'downloaded_material.pdf' // Specify the destination file path
    )
  )
  .then((downloadedFilePath) =>
    console.log('File downloaded successfully:', downloadedFilePath)
  )
  .catch(console.error);
