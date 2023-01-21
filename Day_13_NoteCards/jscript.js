let container2 = document.getElementsByClassName("container2")[0];
let container3 = document.getElementsByClassName("container3")[0];
var i = 0;

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }else{
        container3.style.display = "none";
    }
}

function createNote(){
    let noteText = document.getElementById("textbox").value;
    let node0 = document.createElement("div");
    let node1 = document.createElement("h1");

    node1.setAttribute("style", "width: 200px; height: 200px; font-size: 1.5rem; padding: 20px; margin-top:20px; overflow: hidden; box-shadow: 0px 5px 16px rgba(0,0,0,0.5); font-family: 'Neucha', cursive; border-radius: 20px; margin-left: 30px;");

    node0.setAttribute("style", "transition: 300ms;")

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })
    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })
    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    document.getElementById("textbox").value = "";

    node1.style.backgroundColor = color();

    node1.innerHTML = noteText;
    node0.appendChild(node1);
    container2.insertAdjacentElement("beforeend", node0);
}

function color(){
 let random_color = ["#FFF689", "#D6FFB7", "#7AE7C7", "#BEA2C2", "#EF5B5B"]

 if(i>random_color.length-1){
    i=0;
 }
 return random_color[i++];
}