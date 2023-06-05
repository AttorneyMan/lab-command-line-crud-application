// const { nanoid } = require("nanoid");
const { readJSONFile, writeJSONFile, listNewItems } = require("./helper")
const { NewItemMakeController,listNewItemsController, } = require("./controller")

function run(){

console.log(chalk.strikethrough.bgRed("Welcome to Our trackR App! 💰\n\n"));

    let writeToFile = false; 
    let receipts = readJSONFile("data", "data.json");
    const action = process.argv[2]; 
    const name = process.argv[3];
    const price = process.argv[4];
    const pPath = "data";
    const fileName = "data.json"; 

 
 
 
    switch(action) {

        case "iMakeReceipt":
            NewItemMakeController(receipts , name , price);
            writeToFile = true;
            break;
        
        case "iListReceipts":
            listNewItemsController(receipts);
            writeToFile = true;
            break;

         case "iUpdateReceipts":
            const id = process.argv[3];
            const name2 = process.argv[4];
            iUpdateReceiptsController(receipts, id , name2)
            writeToFile = true;
            break;    
        
            case "iDestroyReceipts":
                function destroy(receipts, id) {
                    const index = receipts.findIndex((receipt) => id === id);
                    if (index > -1) {
                      receipts.splice(index, 1);
                     return receipts;
                    } else {
                     return receipts;
                    }
                }
            writeToFile = true;
            break;
 }
} 

run()
