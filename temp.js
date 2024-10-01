const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

// Adjust the path to your HTML files directory
const directoryPath = path.join(__dirname, "views/pages.html");

console.log(`Scanning directory: ${directoryPath}`);

// Use glob to find all .html files in the directory and its subdirectories
glob(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  console.log(`Found files: ${files.length}`);

  files.forEach((file) => {
    const oldPath = file;
    const newPath = file.replace(".html", ".ejs");

    console.log(`Renaming: ${oldPath} -> ${newPath}`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log("Error renaming file: " + err);
      } else {
        console.log(
          `Renamed: ${path.basename(oldPath)} -> ${path.basename(newPath)}`
        );
      }
    });
  });
});
