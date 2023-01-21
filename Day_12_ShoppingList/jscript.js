const itemList = document.getElementsByClassName("allItems")[0];
const userInput = document.getElementById("inputbox");

function addList(){
    addItem();
}

function clearList(){
    itemList.innerHTML = "";
}

function addItem(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userInput.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    itemList.insertAdjacentElement("beforeend", h2);
    userInput.value = "";
}