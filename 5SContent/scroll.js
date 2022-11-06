var contador = 0;
var hLine = document.getElementsByClassName("h-red-bar")[0];
var videoPersp = document.getElementsByClassName("s-video1")[0];
var galeryParallax = false;

function contadorState() {
    // Header Line & Video show
    if (window.scrollY < 550) {
        hLine.style.bottom = "5rem";
    }
    else if (contador > 0, window.scrollY > 200) {
        videoPersp.classList.add("s-video1-show");
        hLine.style.bottom = "0rem";
    }

    // Parallax activation
    if (window.scrollY > window.innerHeight * 1.5) {
        galeryParallax = true;
    }
}

//Video observer
var vidObserver = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        contador++;
        console.log(contador);
        contadorState();
        if (entries[0]['intersectionRatio'] === 1)
            console.log('Target is fully visible in the screen');
        else if (entries[0]['intersectionRatio'] > 0.5)
            console.log('More than 50% of target is visible in the screen');
        else
            console.log('Less than 50% of target is visible in the screen');
    }
    else {
        contador = 0;
        console.log('Target is not visible in the screen ' + contador);
        contadorState();
    }
}, { threshold: [0, 0.5, 1] });

vidObserver.observe(document.querySelector("#h-trigger"));

// Parallax

// Container de los elementos
const container = document.getElementsByClassName('s-home-work-section')[0];

// Elementos
const element01 = document.getElementsByClassName('s-work__item01')[0];
const element02 = document.getElementsByClassName('s-work__item02')[0];
const element03 = document.getElementsByClassName('s-work__item03')[0];
const element04 = document.getElementsByClassName('s-work__item04')[0];
const element05 = document.getElementsByClassName('s-work__item05')[0];

const parallaxElements = [element01, element02, element03, element04, element05];

// Window sizes
const sizeY = window.innerHeight;
const sizeX = window.innerWidth;

document.addEventListener('scroll', e => {
    console.log(sizeY);
    console.log(window.scrollY);
    if (galeryParallax == true) {
        console.log("Parallax activado");
        element01.style.top = (window.scrollY / 2) * -0.2 + "px";
        element02.style.top = (window.scrollY / 2) * -0.9 + "px";
        element03.style.top = (window.scrollY / 2) * -0.8 + "px";
        element04.style.top = (window.scrollY / 2) * -0.09 + "px";
        element05.style.top = (window.scrollY / 2) * -0.75 + "px";
    }
    else console.log("Parallax desactivado");

});

// Elementos del Parallax

// Element 01
function element01State() {
    let element01HhasBeenActivated = false;
    if (!element01HhasBeenActivated) {
        element01.classList.add('work-element-is-shown');
        element01.style.top += 100 + "px";
        element01HhasBeenActivated = true;
    }
}
// Element 02
function element02State() {
    let element02HhasBeenActivated = false;
    if (!element02HhasBeenActivated) {
        element02.classList.add('work-element-is-shown');
        element02.style.top += 100 + "px";
        element02HhasBeenActivated = true;
    }
}

// Element 03
function element03State() {
    let element03HhasBeenActivated = false;
    if (!element03HhasBeenActivated) {
        element03.classList.add('work-element-is-shown');
        element03.style.top += 100 + "px";
        element03HhasBeenActivated = true;
    }
}

// Element 04
function element04State() {
    let element04HhasBeenActivated = false;
    if (!element04HhasBeenActivated) {
        element04.classList.add('work-element-is-shown');
        element04.style.top += 100 + "px";
        element04HhasBeenActivated = true;
    }
}

// Element 05
function element05State() {
    let element05HhasBeenActivated = false;
    if (!element05HhasBeenActivated) {
        element05.classList.add('work-element-is-shown');
        element05.style.top += 100 + "px";
        element05HhasBeenActivated = true;
    }
}

// Work section observers
const element01Trigger = document.querySelector("#work-element01-trigger");
const element02Trigger = document.querySelector("#work-element02-trigger");
const element03Trigger = document.querySelector("#work-element03-trigger");
const element04Trigger = document.querySelector("#work-element04-trigger");
const element05Trigger = document.querySelector("#work-element05-trigger");

//Element 01 Observer
var element01Observer = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        console.log(contador);
        contadorState();
        if (entries[0]['intersectionRatio'] < 0.5)
            console.log('Less than 50% of target is visible in the screen');
        element01State();
    }
    else {
        console.log('Target is not visible in the screen ' + contador);
    }
}, { threshold: [0, 0.5, 1] });

element01Observer.observe(element01Trigger);

//Element 02 Observer
var element02Observer = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        console.log(contador);
        if (entries[0]['intersectionRatio'] < 0.5)
            console.log('Less than 50% of target is visible in the screen');
        element02State();
    }
    else {
        console.log('Target is not visible in the screen ' + contador);
    }
}, { threshold: [0, 0.5, 1] });

element02Observer.observe(element02Trigger);

//Element 03 Observer
var element03Observer = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        console.log(contador);
        if (entries[0]['intersectionRatio'] < 0.5)
            console.log('Less than 50% of target is visible in the screen');
        element03State();
    }
    else {
        console.log('Target is not visible in the screen ' + contador);
    }
}, { threshold: [0, 0.5, 1] });

element03Observer.observe(element03Trigger);

//Element 04 Observer
var element04Observer = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        console.log(contador);
        if (entries[0]['intersectionRatio'] < 0.5)
            console.log('Less than 50% of target is visible in the screen');
        element04State();
    }
    else {
        console.log('Target is not visible in the screen ' + contador);
    }
}, { threshold: [0, 0.5, 1] });

element04Observer.observe(element04Trigger);

//Element 05 Observer
var element05Observer = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true) {
        console.log(contador);
        if (entries[0]['intersectionRatio'] < 0.5)
            console.log('Less than 50% of target is visible in the screen');
        element05State();
    }
    else {
        console.log('Target is not visible in the screen ' + contador);
    }
}, { threshold: [0, 0.5, 1] });

element05Observer.observe(element05Trigger);






