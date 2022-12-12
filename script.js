console.log("merry christmas!");

let christmasButton = document.querySelector(".christmas-button");
let christmasWiresFrame = document.querySelector("#christmas-wires-frame");

console.log(christmasButton);
//let flashArray = [ "frame-flash1", "frame-flash2", "frame-flash3", "frame-flash4", "frame-flash5", "frame-flash6", "frame-flash7", "frame-flash8"];

let flashArray = [ "frame-flash1", "frame-flash2", "frame-flash3", "frame-flash6", "frame-flash4", "frame-flash5", "frame-flash7", "frame-flash8"];


let flashClicked = 0;
christmasButton.addEventListener("click", (e)=>{
    flashClicked = flashClicked + 1;
    let index = flashClicked % flashArray.length;
    console.log("flashOption=", flashArray[index]);
    christmasWiresFrame.className = flashArray[index]; 
})


