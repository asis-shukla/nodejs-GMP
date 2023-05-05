const fs = require("fs");
const csv = require("csvtojson");

const readStream = fs.createReadStream("src/books.csv", "utf8");
const writeStream = fs.createWriteStream("src/books.txt", "utf8");

readStream.pipe(csv()).pipe(writeStream);

