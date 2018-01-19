
function displayClock(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

	if (h<=9){
		h = '0'+h;
	} if (m<=9){ 
		m = '0'+m;
	} if (s<=9) {
		s = '0'+s;
	}	
	var color = '#'+h+m+s;

document.body.style.background = color;

document.getElementById("hex").innerHTML = h + ':' + m + ':' +s;

setTimeout(displayClock, 1000);
}

displayClock();