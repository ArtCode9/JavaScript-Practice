const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const { readExcel } = require("./src/excel");
const { readCSV } = require("./src/csv");

function createWindow() {

    const win = new BrowserWindow({

        width: 1000,
        height: 750,
        minWidth: 900,
        minHeight: 700,

        webPreferences: {

            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false

        }

    });

    win.loadFile("src/index.html");

}

app.whenReady().then(() => {

    createWindow();

});

app.on("window-all-closed", () => {

    if (process.platform !== "darwin") {

        app.quit();

    }

});



ipcMain.handle("select-csv", async () => {

    const result = await dialog.showOpenDialog({

        filters: [

            { name: "CSV Files", extensions: ["csv"] }

        ],

        properties: ["openFile"]

    });

    if (result.canceled) return "";

    return result.filePaths[0];

});


ipcMain.handle("select-excel", async () => {

    const result = await dialog.showOpenDialog({

        filters: [

            { name: "Excel Files", extensions: ["xlsx", "xls"] }

        ],

        properties: ["openFile"]

    });

    if (result.canceled) return "";

    return result.filePaths[0];

});


ipcMain.handle("select-output", async () => {

    const result = await dialog.showOpenDialog({

        properties: ["openDirectory"]

    });

    if (result.canceled) return "";

    return result.filePaths[0];

});

ipcMain.handle("read-files", async (event, csvFile, excelFile) => {

    const csvData = await readCSV(csvFile);

    const excelData = readExcel(excelFile);

    return {

        csvRows: csvData.length,

        excelRows: excelData.length,

        csvData,

        excelData

    };

});