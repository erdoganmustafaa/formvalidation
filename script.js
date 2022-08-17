const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function success(input){
    input.className = "form-control is-valid";
}
function error(input,message){
    input.className = "form-control is-invalid";
    let errorMessage = input.nextElementSibling;
    errorMessage.textContent = message; 
    errorMessage.className="invalid-feedback";
}

function checkRequired(inputs){
    inputs.forEach(function(input) {
        if(input.value===""){
            error(input,`${input.id} is required.`)
        }
        else{
            success(input);
        }
    });
}
function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} must be minimum ${min} character.`);
    }
    else if(input.value.length >max) {
        error(input,`${input.id} must be maximum ${max} character.`);
    }
    else{
        success(input);
    }
    
}
function isPasswordEqual(input1,input2){
        if(input1.value !== input2.value){  
            error(input1,"Passwords do not match");
            error(input2,"Passwords do not match");
            console.log("Selam");
        }
}
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkRequired([username,email,password,repassword]);
    checkLength(username,5,15);
    checkLength(password,8,20);
    isPasswordEqual(password,repassword);
})