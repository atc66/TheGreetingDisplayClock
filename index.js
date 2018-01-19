
function displayClock(){
var hex = document.getElementById('hex')
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var greet = document.getElementById('greeting')
var Afterimage = document.getElementById('afternoonImg')

	if (h<=9){
		h = '0'+h;
	} if (m<=9){ 
		m = '0'+m;
	} if (s<=9) {
		s = '0'+s;
	}	

hex.innerHTML = h + ':' + m + ':' + s;

if (h>=12 && h<=16){
	greet.innerHTML="GOOD AFTERNOON!"
	Afterimage.style.backgroundImage = "url('img/afternoon.jpg')";
} else if (h>=17 && h<=20){
	greet.innerHTML="GOOD EVENING!"
	Afterimage.style.backgroundImage = "url('img/evening.jpg')";
} else if (h>=20 && h<=6){
	greet.innerHTML="GOOD NIGHT!"
	Afterimage.style.backgroundImage = "url('img/night.jpg')";
} else {
	greet.innerHTML="GOOD MORNING!"
	Afterimage.style.backgroundImage = "url('img/morning.webp')";
}

setTimeout(displayClock, 1000);
}

displayClock();