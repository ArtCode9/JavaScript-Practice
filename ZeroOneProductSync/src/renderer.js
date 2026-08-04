const csvBtn = document.getElementById("csvBtn");
const excelBtn = document.getElementById("excelBtn");
const outputBtn = document.getElementById("outputBtn");
const startBtn = document.getElementById("startBtn");

const csvPath = document.getElementById("csvPath");
const excelPath = document.getElementById("excelPath");
const outputPath = document.getElementById("outputPath");

const progressBar = document.getElementById("progressBar");

const products = document.getElementById("products");
const matched = document.getElementById("matched");
const updated = document.getElementById("updated");
const missing = document.getElementById("missing");

console.log(products);
console.log(matched);
console.log(updated);
console.log(missing);

const log = document.getElementById("log");

csvBtn.onclick = async () => {

    const file = await window.api.selectCSV();

    if(file){

        csvPath.value = file;
        addLog("✔ CSV Selected");

    }

};

excelBtn.onclick = async () => {

    const file = await window.api.selectExcel();

    if(file){

        excelPath.value = file;
        addLog("✔ Excel Selected");

    }

};

outputBtn.onclick = async () => {

    const folder = await window.api.selectOutput();

    if(folder){

        outputPath.value = folder;
        addLog("✔ Output Folder Selected");

    }

};

startBtn.onclick = async ()=>{

    if(csvPath.value==="" || excelPath.value===""){

        alert("Please select files.");

        return;

    }

    addLog("Reading Files...");

    progressBar.value = 20;

    try {

    const result = await window.api.readFiles(

        csvPath.value,

        excelPath.value

    );

    progressBar.value = 60;

    products.innerText = result.csvRows;
    matched.innerText = result.excelRows;

    updated.innerText = 0;
    missing.innerText = 0;

    addLog("CSV Rows : " + result.csvRows);
    addLog("Excel Rows : " + result.excelRows);

    progressBar.value = 100;

    addLog("Done.");

}
catch(err){

    console.error(err);

    addLog("ERROR : " + err.message);

}

    progressBar.value = 60;

    products.innerText = result.csvRows;

    matched.innerText = result.excelRows;

    updated.innerText = 0;

    missing.innerText = 0;

    addLog("CSV Rows : "+result.csvRows);

    addLog("Excel Rows : "+result.excelRows);

    progressBar.value = 100;

    addLog("Done.");

};

function addLog(text){

    log.value += text + "\n";

    log.scrollTop = log.scrollHeight;

}