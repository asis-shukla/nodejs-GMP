const fs = require("fs");
const csv = require("csvtojson");

const readStream = fs.createReadStream("src/books.csv", 'utf8');
const writeStream = fs.createWriteStream("src/books.txt", "utf8");

readStream
    .on("error", (err) => {
        console.log("error", err);
    })
    .pipe(csv()).setEncoding("utf8")
    .on("data", (line) => {
        console.log("line", line);
    })
    .pipe(writeStream)
    .on("close", () => {
        console.log("end of file");
    });
