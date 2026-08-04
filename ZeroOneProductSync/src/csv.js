const fs = require("fs");
const csv = require("csv-parser");

function readCSV(path){

    return new Promise((resolve)=>{

        const rows=[];

        fs.createReadStream(path)

        .pipe(csv())

        .on("data",(row)=>{

            rows.push(row);

        })

        .on("end",()=>{

            resolve(rows);

        });

    });

}

module.exports={
    readCSV
};