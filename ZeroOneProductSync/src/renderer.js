const csvBtn = document.getElementById("csvBtn");
const excelBtn = document.getElementById("excelBtn");
const outputBtn = document.getElementById("outputBtn");

const csvPath = document.getElementById("csvPath");
const excelPath = document.getElementById("excelPath");
const outputPath = document.getElementById("outputPath");

const log = document.getElementById("log");

csvBtn.addEventListener("click", async () => {

    const result = await window.api.selectCSV();

    if (result) {
        csvPath.value = result;
        addLog("CSV Selected");
    }

});

excelBtn.addEventListener("click", async () => {

    const result = await window.api.selectExcel();

    if (result) {
        excelPath.value = result;
        addLog("Excel Selected");
    }

});

outputBtn.addEventListener("click", async () => {

    const result = await window.api.selectOutput();

    if (result) {
        outputPath.value = result;
        addLog("Output Folder Selected");
    }

});

function addLog(message){

    log.value += message + "\n";

}