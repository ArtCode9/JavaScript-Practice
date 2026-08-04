const fs = require("fs");
const { createObjectCsvWriter } = require("csv-writer");

async function exportCSV(rows, outputFile) {

    if (!rows.length) return;

    const headers = Object.keys(rows[0]).map(key => ({
        id: key,
        title: key
    }));

    const writer = createObjectCsvWriter({

        path: outputFile,

        header: headers,

        alwaysQuote: true

    });

    await writer.writeRecords(rows);

}

module.exports = {

    exportCSV

};