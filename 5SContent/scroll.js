var contador = 0;
var hLine = document.getElementsByClassName("h-red-bar")[0];
var videoPersp = document.getElementsByClassName("s-video1")[0];
var galeryParallax = false;

function contadorState() {
    if (window.scrollY < 550) {
        hLine.style.bottom = "5rem";
    }    
    else if (contador > 0, window.scrollY > 200) {
        videoPersp.classList.add("s-video1-show");
        hLine.style.bottom = "0rem";
    }
    if (window.scrollY > window.innerHeight * 1.5) {
        galeryParallax = true;
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

// Parallax

    // Container de los elementos
    const container = document.getElementsByClassName('s-home-work-section')[0];
    console.log(container);

    // Elementos
    const element01 = document.getElementsByClassName('s-work__item01')[0];
    const element02 = document.getElementsByClassName('s-work__item02')[0];
    const element03 = document.getElementsByClassName('s-work__item03')[0];
    const element04 = document.getElementsByClassName('s-work__item04')[0];
    const element05 = document.getElementsByClassName('s-work__item05')[0];

    const parallaxElements = [element01, element02, element03, element04, element05];
    //const elementBot = element01.getAttribute(bottom);

    // Window sizes
    const sizeY = window.innerHeight;
    const sizeX = window.innerWidth;

document.addEventListener('scroll', e => {
    console.log(sizeY);
    console.log(window.scrollY);
    if (galeryParallax == true) {
        console.log("Parallax activado");
        element01.style.top = (window.scrollY/2) * -0.2 + "px";
        element02.style.top = (window.scrollY/2) * -0.9 + "px";
        element03.style.top = (window.scrollY/2) * -0.8 + "px";
        element04.style.top = (window.scrollY/2) *  -0.09 + "px";
        element05.style.top = (window.scrollY/2) * -0.75 + "px";
    }
    else console.log("Parallax desactivado");
    
});


