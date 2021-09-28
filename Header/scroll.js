var contador = 0;
var hLine = document.getElementsByClassName("h-red-bar")[0];
var videoPersp = document.getElementsByClassName("s-video1")[0];

function contadorState() {
    if (window.scrollY < 550) {
        hLine.style.bottom = "9vh";
    }    
    else if (contador > 0, window.scrollY > 500) {
        videoPersp.classList.add("s-video1-show");
        hLine.style.bottom = "0vh";
    }

}

//Observer
var observer = new IntersectionObserver(function(entries) {
	if(entries[0]['isIntersecting'] === true) {
        contador++;
        console.log(contador);
        contadorState();
		if(entries[0]['intersectionRatio'] === 1)
			console.log('Target is fully visible in the screen');
		else if(entries[0]['intersectionRatio'] > 0.5)
			console.log('More than 50% of target is visible in the screen');
		else 
			console.log('Less than 50% of target is visible in the screen');
	}
	else{
        contador = 0;
		console.log('Target is not visible in the screen ' + contador);
        contadorState();
	}
}, { threshold: [0, 0.5, 1] });

observer.observe(document.querySelector("#h-trigger"));
