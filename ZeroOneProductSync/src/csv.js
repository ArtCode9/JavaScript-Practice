const fs = require("fs");
const csv = require("csv-parser");

function readCSV(filePath){

    return new Promise((resolve)=>{

        const rows=[];

        fs.createReadStream(filePath)

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