const fs = require("fs");
const csv = require("csv-parser");

function readCSV(filePath) {

    return new Promise((resolve, reject) => {

        const rows = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", row => rows.push(row))
            .on("end", () => resolve(rows))
            .on("error", reject);

    });

}

module.exports = { readCSV };