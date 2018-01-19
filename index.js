
function displayClock(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var greet = document.getElementById('greeting')

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

if (h>=12 && h<=17){
	greet.innerHTML="GOOD AFTERNOON!"
} else if (h>=17 && h<=20){
	greet.innerHTML="GOOD EVENING!"
} else if (h>=20 && h<=6){
	greet.innerHTML="GOOD NIGHT!"
} else {
	greet.innerHTML="GOOD MORNING!"
}

setTimeout(displayClock, 1000);
}

displayClock();