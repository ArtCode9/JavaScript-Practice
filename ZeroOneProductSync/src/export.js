const fs = require("fs");

function exportCSV(filePath, data) {

    if (!data.length) return;

    const headers = Object.keys(data[0]);

    const rows = [];

    rows.push(headers.join(","));

    data.forEach(row => {

        const values = headers.map(header => {

            let value = row[header];

            if (value === undefined || value === null)
                value = "";

            value = String(value).replace(/"/g, '""');

            return `"${value}"`;

        });

        rows.push(values.join(","));

    });

    fs.writeFileSync(
        filePath,
        rows.join("\n"),
        "utf8"
    );

}

module.exports = {
    exportCSV
};