const name = document.getElementById('name');
const regnum = document.getElementById('regnum');
const role = document.getElementById('role');
const phonenum = document.getElementById('phonenum');
const email = document.getElementById('email');
const form = document.getElementById('mainform');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e)=>{
    let messages = []
    
    if(name.value.length > 40){
        messages.push('Name cannot exceed 40 characters.');
    }
    if(name.value.length < 3){
        messages.push("Name must be 3 characters or longer. \n");
    }
    if(regnum.value.length != 10){
        messages.push("Registration Number must be 10 characters. \n");
    }
    if(phonenum.value.length != 10){
        messages.push("Phone number must be 10 digits. \n");
    }

    if(messages.length>0){
        e.preventDefault();
        errorElement.innerText = messages.join(' ')
    }
})