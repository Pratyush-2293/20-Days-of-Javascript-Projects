let ptext = document.getElementById("passtext");
let plist = document.getElementById("passlist");
let p = "";

const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','&','*',".","?",'_','^' ]
// 62 total or 61 in proglang

function newPass(){
    p = "";
    for(i=0;i<10;i++){
        let rnum = Math.floor(Math.random() * 62);
        let a = charArray[rnum];
        p += a;
    }
    ptext.innerHTML = p;
}

function savePass(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + p;
    h2.setAttribute("style", "color: white; font-family: monospace; font-weight: bold; font-size: 2rem; margin: 10px;");
    h2.addEventListener("dblclick", ()=>{
        h2.remove();
    })

    plist.insertAdjacentElement("beforeend", h2);
}