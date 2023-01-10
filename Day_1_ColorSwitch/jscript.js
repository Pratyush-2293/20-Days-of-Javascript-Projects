var x=0;
let colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

function switchColor(){
    x = Math.floor(Math.random() * 6);

    document.getElementsByTagName("body")[0].style.background = colors[x];
}
