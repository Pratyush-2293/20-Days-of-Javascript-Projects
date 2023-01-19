let ms = document.getElementById("tens");
let s = document.getElementById("seconds");
let m = document.getElementById("minutes");
let mscounter = 0;
let scounter = 0;
let mcounter = 0;

function clockCounter(){
    mscounter++
    if(mscounter<9){
        ms.innerHTML = "0" + mscounter
    }
    if(mscounter>9){
        ms.innerHTML = mscounter
    }
    if(mscounter>99){
        scounter++
        mscounter=0
        ms.innerHTML = "0" + mscounter
        s.innerHTML = "0" + scounter
    }
    if(scounter>9){
        s.innerHTML = scounter
    }
    if(scounter>99){
        mcounter++
        scounter=0
        s.innerHTML = "0" + scounter
        m.innerHTML = "0" + mcounter
    }
    if(mcounter>9){
        m.innerHTML = mcounter
    }
}

function startClock(){
    startState = setInterval(clockCounter, 10);
}

function stopClock(){
    clearInterval(startState);
}

function resetClock(){
    mscounter = 0;
    scounter = 0;
    mcounter = 0;
    ms.innerHTML = "00";
    s.innerHTML = "00";
    m.innerHTML = "00";
}