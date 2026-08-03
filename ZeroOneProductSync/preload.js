const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {

    selectCSV: () =>
        ipcRenderer.invoke("select-file", [
            {
                name: "CSV",
                extensions: ["csv"]
            }
        ]),

    selectExcel: () =>
        ipcRenderer.invoke("select-file", [
            {
                name: "Excel",
                extensions: ["xlsx", "xls"]
            }
        ]),

    selectFolder: () =>
        ipcRenderer.invoke("select-folder")

});