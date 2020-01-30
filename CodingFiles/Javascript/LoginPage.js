
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
    var reachedSpeed = false;
    var loop = setInterval(() => {
        if (!spin && reachedSpeed){
            if (angle%360 < 111 && angle%360 > 110){
                beginSlowdown = true;
            }
            if (beginSlowdown){
                speed = speed > 0 ? speed - .002 : 0.002;
                if (speed <= 0){
                    clearInterval(loop);
                    angle = 0;
                    return;
                }
            }
        }else{
            speed = speed < 1 ? speed + .002 : 1
            if (speed == 1){ reachedSpeed = true;}
        }
        angle += speed;
        document.getElementById('icon').style = 'transform: rotate(' + angle + 'deg);';
    }, 1);
}

function LoginClicked(id){
    if (angle != 0){ return; }
    spinLogo();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    var validInputs = false;
    if(username == "" || password == ""){
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST","../PHP/profile-manager.php",true);
        //xhttp.setRequestHeader
        xhttp.send(username,password);
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && status == 200){
                validInputs = true;
            }
        }
    }
    

    const warning = document.getElementById("warning");
    if (!validInputs){
        warning.style.display = "inline-block";
    }else{
        warning.style.display = "none";
    }
    
    spin = false;
}

function RegisterClicked(id){
    if (angle != 0){ return; }
    spinLogo();
    const login = document.getElementById("loginButton");

    spin = false;
}


function compileRegisterData(){

}


function loadPage(){
    console.log("Page Load Ran");
}
