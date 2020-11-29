var isActive = false;
function OnMenuClick(){
	console.log(window.isACtive);
	if(!window.isActive){
		document.querySelector('.menu').classList.add('menu-m');
	}
	else{
		console.log("here is some problem");
		document.querySelector('.menu').classList.remove('menu-m');
	}
	window.isActive = !window.isActive;
}

