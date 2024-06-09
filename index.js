const fs = require("fs");

const directoryPath = "c:\\"; // Specify the path to the directory you want to access

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Files in directory:", files);
});
