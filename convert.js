/*
mkdir hls_converter
cd hls_converter
npm init -y
npm install child_process
*/

// Run
// node convert.js

const { exec } = require("child_process");

function convertToHLS(inputFile, outputFile) {
  const command = `ffmpeg -i ${inputFile} -vn -codec:a copy -hls_time 10 -hls_list_size 0 -f hls ${outputFile}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`FFmpeg stderr: ${stderr}`);
      return;
    }
    console.log(`FFmpeg stdout: ${stdout}`);
    console.log("Conversion complete!");
  });
}

// Використання функції
const inputFile = "inputFile.m4a";
const outputFile = "output.m3u8";
convertToHLS(inputFile, outputFile);

/*
const { exec } = require("child_process");

function convertToHLS(inputFile, outputFile) {
  const command = `ffmpeg -i ${inputFile} -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ${outputFile}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`FFmpeg stderr: ${stderr}`);
      return;
    }
    console.log(`FFmpeg stdout: ${stdout}`);
    console.log("Conversion complete!");
  });
}

// Використання функції
const inputFile = "input.mp4";
const outputFile = "output.m3u8";
convertToHLS(inputFile, outputFile);
*/
