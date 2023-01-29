const wrapper = document.querySelector('.wrapper'),
generateBtn = wrapper.querySelector(".form button");
qrInput = wrapper.querySelector(".form input");
qrImg = wrapper.querySelector(".qr-code img");
downloadbtn = document.getElementById("dlbtn");

generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
    });
    wrapper.classList.add('active');
})

qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});

downloadbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchFile(qrImg.src);
})

function fetchFile(url){
    try{
        saveAs(url, "QR Code");
    }catch(error){
        alert("Failed to Download QR.")
    };
}