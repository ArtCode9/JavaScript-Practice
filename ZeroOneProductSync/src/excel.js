const XLSX = require("xlsx");

function readExcel(filePath) {

    const workbook = XLSX.readFile(filePath);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet);

    return data;

}

module.exports = { readExcel };