let questiontext = document.getElementById("qtext");
let op1 = document.getElementById("option1");
let op2 = document.getElementById("option2");
let op3 = document.getElementById("option3");
const select_types = [0,1,2,3];
let current_type = 0;
let answer = 0;

function adds(){
    current_type = 0;
    newEquation();
}

function subs(){
    current_type = 1;
    newEquation();
}

function muls(){
    current_type = 2;
    newEquation();
}

function divs(){
    current_type = 3;
    newEquation();
}

function newEquation(){
    if(current_type==0){
        let num1 = Math.floor(Math.random() * 11);
        let num2 = Math.floor(Math.random() * 11);
        questiontext.innerHTML = `${num1} + ${num2} = ?`

        answer = num1 + num2;
        randomAssign(answer);
    }
    if(current_type==1){
        let num1 = Math.floor(Math.random() * 11);
        let num2 = Math.floor(Math.random() * 11);
        questiontext.innerHTML = `${num1} - ${num2} = ?`

        answer = num1 - num2;
        randomAssign(answer);
    }
    if(current_type==2){
        let num1 = Math.floor(Math.random() * 11);
        let num2 = Math.floor(Math.random() * 11);
        questiontext.innerHTML = `${num1} x ${num2} = ?`

        answer = num1 * num2;
        randomAssign(answer);
    }
    if(current_type==3){
        let num1 = Math.floor(Math.random() * 11);
        let num2 = Math.floor(Math.random() * 11);
        questiontext.innerHTML = `${num1} / ${num2} = ?`

        answer = num1 / num2;
        randomAssign(answer);
    }
}

function randomAssign(ans){
    let randomChoice = Math.floor(Math.random() * 3);
    if(randomChoice==0){
        op1.innerHTML = ans;
        op2.innerHTML = Math.floor(Math.random() * 21);
        op3.innerHTML = Math.floor(Math.random() * 21);
    }
    if(randomChoice==1){
        op2.innerHTML = ans;
        op1.innerHTML = Math.floor(Math.random() * 21);
        op3.innerHTML = Math.floor(Math.random() * 21);
    }
    if(randomChoice==2){
        op3.innerHTML = ans;
        op2.innerHTML = Math.floor(Math.random() * 21);
        op1.innerHTML = Math.floor(Math.random() * 21);
    }
}

function ob1(){
    if(op1.innerHTML == answer){
        alert('Correct !')
        newEquation();
    } else{
        alert("Wrong Answer!");
    }
}

function ob2(){
    if(op2.innerHTML == answer){
        alert('Correct !')
        newEquation();
    } else{
        alert("Wrong Answer!");
    }
}

function ob3(){
    if(op3.innerHTML == answer){
        alert('Correct !');
        newEquation();
    } else{
        alert("Wrong Answer!");
    }
}

newEquation();