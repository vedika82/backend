// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";

// Reading the file Asynchronously - Not blocking rest of execution
function readFile1(filename1) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename1, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file1");
        }
    });
}

function readFile2(filename2) {
    // Using fs.readFile to read the file asynchronously
    fs.readFile(filename2, (err, data) => {
        if (err) {
            // Logging the error if any occurs
            console.log(err);
        } else {
            // Logging the content of the file if read successfully
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file2");
        }
    });
}

// Log message before reading the first file
console.log('Before reading the file-1');
readFile1(filename1);

// Log message before reading the second file
console.log('Before reading the file-2');
readFile2(filename2);

// Log message after initiating the reading of both files
console.log('All done!');

// Explanation of the Code
// require('fs') imports the Node.js built-in fs module, which provides file system-related functionality.

// readFile1(filename1) and readFile2(filename2) define functions to read courseDetails.json and sampleData.json respectively using fs.readFile, which reads the files asynchronously, allowing the rest of the code to execute without waiting for the file reading to complete.

// In each function, fs.readFile(filename, callback) reads the specified file. If an error occurs during reading, it logs the error; otherwise, it logs the content of the file and a completion message.

// Before calling readFile1(filename1) and readFile2(filename2) functions, log messages are printed to indicate the start of the reading process for each file.

// After initiating the reading of both files, a final log message "All done!" is printed to indicate that the code has executed beyond the file reading initiation.

// In the terminal window run the server with the following command.
// 1
// node ExampleAsyncIO.js

// Copied!

// Wrap Toggled!
// Observe that the two files are being read asynchronously. This will be evident from the order in which the console log appears. The following three console log appears before the file content is printed though the logs are called in the code in different order.

// 1
// 2
// 3
// Before the reading the file-1
// Before the reading the file-2
// All done!