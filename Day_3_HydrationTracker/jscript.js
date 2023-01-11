let x = 0;
let counter = document.getElementById("count")

function addGlass(){
    x++;
    counter.innerHTML = x;
    if(x>15){
        alert("Drinking more than 15 glasses of water per day can have negative effects. Consume responsibly.")
    }
}

function resetDay(){
    if(x<8){
        alert("It is recommended to drink atleast 8 glasses of water per day. Drink more water and stay hydrated!");
    } else if(7<x && x<16){
        alert("You drank plenty of water today, keep it up!");
    }
    x=0;
    counter.innerHTML = x;
}