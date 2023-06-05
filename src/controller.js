//// CRUD Application
/*

    C reate
    R ead
    U pdate
    D estroy

*/
const {NewItemMake, listNewItems} = require("../src/helper")
const { readJSONFile, writeJsonFile } =require("../src/helper")
dex = []


function NewItemMakeController (){
    const receipt = NewItemMake(name , amount);
    receipts.push(receipt)
   console.log('New Sale')

};

function listNewItemsController(){
    const receipts = listNewItems(dex)
    receipts.forEach(({ id, name}) => {
    console.log(`ID: ${id}\tName: ${name}` )
    
   })
};

function iUpdateReceiptsController(id , name2){
    const receipt = data.find((receipt) => receipt.id === id);
  
    if (!receipt) {
      console.log('No Sale!')
      return  
    }

    if (receipt) {
     const updatedReceipts = edit( receipts, receipt, process.argv[4]);
    }

}

function iDestroyReceiptsController(receipt){
    updatedReceipts = destroy(receipts, receipt);
    writeToFile = true;
    break;
}



module.exports ={
    NewItemMakeController,
    listNewItemsController,
    iUpdateReceiptsController,
   iDestroyReceiptsController,
}