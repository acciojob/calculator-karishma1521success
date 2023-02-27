//your code here


function buttonNumber(clickedId){
    let displayInput = document.getElementById('input');
    let numberElement = document.getElementById(clickedId); 
     displayInput.value += numberElement.textContent;
}


// delete 
function deleteValue(){
    let displayInput = document.getElementById('input');  
    let str = displayInput.value;
    let newStr = str.slice(0, str.length-1);
    displayInput.value = newStr;
}

function answer(){
    let displayInput = document.getElementById('input');
    console.log(displayInput.value);
    let strNumber = displayInput.value;  // 8+8+6+3
    let sum = 0
}