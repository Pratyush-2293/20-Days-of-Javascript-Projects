const userInput = document.getElementById("calcInput");
let exp = '';

function numPress(inp){
    exp += inp;
    userInput.value = exp;
}

function equal(){
    userInput.value = eval(exp);
    exp = '';
}

function clearAll(){
    exp = '';
    userInput.value = exp;
}