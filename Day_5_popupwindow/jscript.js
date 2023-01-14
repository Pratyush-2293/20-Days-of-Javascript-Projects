let pop = document.getElementById("contid");

function popUp(){
    console.log("button clicked");
    pop.classList.add('container-active');
}

function popClose(){
    pop.classList.remove('container-active');
}