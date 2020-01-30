var state = 0 //0 = logging in, 1 = registering, 2 = performing process
var formWindow = document.getElementById("loginWindow");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var angle = 0;
var spin = false
function spinLogo(){
    spin = true;
    var speed = 0.2;
    var beginSlowdown = false;
    var loop = setInterval(() => {
        if (!spin){
            if (angle%360 < 110 && angle%360 > 109){
                beginSlowdown = true;
            }
            if (beginSlowdown){
                speed = speed > 0 ? speed - .002 : 0.002;
                if (speed <= 0){
                    clearInterval(loop);
                }
            }
        }else{
            speed = speed < 1 ? speed + .002 : 1
        }
        angle += speed;
        document.getElementById('icon').style = 'transform: rotate(' + angle + 'deg)';
    }, 1);
}

function LoginClicked(id){
    if (state > 0){ return; }
    //spinLogo();
    console.log("LoginClicked");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Username: "+username+"\tPassword: "+password);
    
}

function RegisterClicked(id){
    if (state == 2){ return; }
    //spin = false;
    state = 2
    const login = document.getElementById("loginButton");
    state = 1
}


function compileRegisterData(){

}

function compileLoginData(){

}

function insertRegisterForms(){
    
}

function loadPage(){
    console.log("Page Load Ran");
}
