console.log("merry christmas!");

let christmasButton = document.querySelector(".christmas-button");
let christmasWiresFrame = document.querySelector("#christmas-wires-frame");

console.log(christmasButton);
let flashArray = ["frame-flash1", "frame-flash2", "frame-flash3","frame-flashNONE", "frame-flash4"];

let flashClicked = 0;
christmasButton.addEventListener("click", (e)=>{
    console.log("clicked!");
    flashClicked = flashClicked + 1;
    let index = flashClicked % flashArray.length;
    console.log("index=", index);
    christmasWiresFrame.className = flashArray[index]; 
})


