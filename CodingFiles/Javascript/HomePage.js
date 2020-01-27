var list = ["Ratstations in use: 0/3", "Server uptime: 0m"];
var currentStat = 0;

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

function newStat(){ // generate new heading box with stat info
	var container = document.getElementById("menuImg") 
	var stat = document.createElement('h1');
	stat.style.opacity = 0;
	stat.innerHTML = list[currentStat];
	currentStat++;
	if (currentStat == list.length){ currentStat = 0; }
	console.log(container.clientHeight);
	stat.style.top = clamp(Math.floor(Math.random()*container.clientHeight),80,container.clientHeight-250)+"px";
	var id = setInterval(move, Math.random()*5+2.5);
	container.appendChild(stat);
	var pos = stat.clientWidth*-1;
	function move(){
		if (pos >= container.clientWidth){
			clearInterval(id);
			stat.parentNode.removeChild(stat);
		}else{
			pos++;
			stat.style.left = pos+"px";
			stat.style.opacity = .8;
		}
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DisplayStats(){
	while (true) {
		await sleep(((Math.random()*3)+1)*1000);
		newStat();
	}
}

//DisplayStats();
function onLoad(){
	console.log("Page Loaded");
}