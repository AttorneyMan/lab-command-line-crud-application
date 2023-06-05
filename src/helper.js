
const { nanoid } = require("nanoid")
const { readFileSync, writeFileSync } = require("node:fs")




function readJSONFile(path, fileName){

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []
}


function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
}


function NewItemMake(name, price){
    const id = nanoid();
    const change = Math.floor(price)
    const donation = (change - price).toFixed(2)

    return {
        name,
        id,
        price,
        donation
    }
}

function listNewItems(receipts){
    return receipts.map(({ id, name, price, donation}) => ({id, name, price, donation }));
}

module.exports = {
    readJSONFile, 
    writeJSONFile,
    NewItemMake,
    listNewItems
}