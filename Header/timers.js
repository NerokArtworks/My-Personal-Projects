function timers() {
    setTimeout(vidAnim, 3200);
    setTimeout(textAnim, 2500);
}

function vidAnim() {
    var vidAnim = document.getElementsByClassName('h-video')[0];
        vidAnim.style.opacity = "1";
}

function textAnim() { 
    for (const element of document.getElementsByClassName("c-home-header-title-line")){
        element.style.opacity="1";
    }
    var cabecera = document.getElementsByTagName("header")[0];
    cabecera.style.transform = "translate(0,0)";
}
timers();