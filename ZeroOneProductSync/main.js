const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 750,
    minWidth: 1000,
    minHeight: 650,
    title: "ZeroOne Product Sync",

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

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit();
});


ipcMain.handle("select-file", async (event, filters) => {

    const result = await dialog.showOpenDialog({

        properties: ["openFile"],

        filters

    });

    if (result.canceled)
        return null;

    return result.filePaths[0];

});

ipcMain.handle("select-folder", async () => {

    const result = await dialog.showOpenDialog({

        properties: ["openDirectory"]

    });

    if (result.canceled)
        return null;

    return result.filePaths[0];

});