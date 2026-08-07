const { dialog } = require("@electron/remote");

const path = require("path");

const { readCSV } = require("./csv");
const { readExcel } = require("./excel");
const { compareProducts } = require("./compare");
const { exportCSV } = require("./export");

// عناصر صفحه
const csvBtn = document.getElementById("csvBtn");
const excelBtn = document.getElementById("excelBtn");
const outputBtn = document.getElementById("outputBtn");
const startBtn = document.getElementById("startBtn");

const csvPath = document.getElementById("csvPath");
const excelPath = document.getElementById("excelPath");
const outputPath = document.getElementById("outputPath");

const progressBar = document.getElementById("progressBar");
const log = document.getElementById("log");

const products = document.getElementById("products");
const matched = document.getElementById("matched");
const updated = document.getElementById("updated");
const missing = document.getElementById("missing");

let csvFile = "";
let excelFile = "";
let outputFolder = "";

function writeLog(text){
    log.value += text + "\n";
    log.scrollTop = log.scrollHeight;
}

// انتخاب CSV
csvBtn.onclick = async ()=>{

    const result = await dialog.showOpenDialog({
        properties:["openFile"],
        filters:[
            {name:"CSV",extensions:["csv"]}
        ]
    });

    if(result.canceled) return;

    csvFile = result.filePaths[0];

    csvPath.value = csvFile;

};

// انتخاب Excel
excelBtn.onclick = async ()=>{

    const result = await dialog.showOpenDialog({
        properties:["openFile"],
        filters:[
            {name:"Excel",extensions:["xlsx","xls"]}
        ]
    });

    if(result.canceled) return;

    excelFile = result.filePaths[0];

    excelPath.value = excelFile;

};

// انتخاب پوشه خروجی
outputBtn.onclick = async ()=>{

    const result = await dialog.showOpenDialog({
        properties:["openDirectory"]
    });

    if(result.canceled) return;

    outputFolder = result.filePaths[0];

    outputPath.value = outputFolder;

};

// اجرای برنامه
startBtn.onclick = async ()=>{

    try{

        log.value="";

        progressBar.value=5;

        writeLog("Reading WooCommerce CSV...");

        const csvProducts = await readCSV(csvFile);

        progressBar.value=25;

        writeLog("Reading Accounting Excel...");

        const excelProducts = readExcel(excelFile);

        progressBar.value=45;

        writeLog("Comparing Products...");

        const result = compareProducts(
            csvProducts,
            excelProducts
        );

        progressBar.value=80;

        const savePath = path.join(
            outputFolder,
            "woocommerce_updated.csv"
        );

        exportCSV(
            savePath,
            result.products
        );

        progressBar.value=100;

        products.innerText=result.products.length;
        matched.innerText=result.matched;
        updated.innerText=result.updated;
        missing.innerText=result.missing;

        writeLog("");
        writeLog("Done.");
        writeLog(savePath);

    }catch(err){

        console.error(err);

        writeLog(err.message);

    }

};