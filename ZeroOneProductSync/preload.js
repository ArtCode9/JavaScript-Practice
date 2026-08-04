const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {

    selectCSV: () => ipcRenderer.invoke("select-csv"),

    selectExcel: () => ipcRenderer.invoke("select-excel"),

    selectOutput: () => ipcRenderer.invoke("select-output"),

    readFiles: (csv, excel) =>
        ipcRenderer.invoke("read-files", csv, excel)

});