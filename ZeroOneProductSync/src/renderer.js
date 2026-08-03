const csvBtn = document.getElementById("csvBtn");
const excelBtn = document.getElementById("excelBtn");
const outputBtn = document.getElementById("outputBtn");

csvBtn.addEventListener("click", async () => {

    const path = await window.electronAPI.selectCSV();

    if(path)
        document.getElementById("csvPath").value = path;

});

excelBtn.addEventListener("click", async () => {

    const path = await window.electronAPI.selectExcel();

    if(path)
        document.getElementById("excelPath").value = path;

});

outputBtn.addEventListener("click", async () => {

    const path = await window.electronAPI.selectFolder();

    if(path)
        document.getElementById("outputPath").value = path;

});