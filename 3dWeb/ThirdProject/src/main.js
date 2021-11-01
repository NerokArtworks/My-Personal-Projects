const homeTitle = document.getElementById('hometitle');
const sec01Title = document.getElementById('sec01title');

const sizeY = window.innerHeight;
document.addEventListener('scroll', e => {
    if (window.scrollY > sizeY/3) {
        homeTitle.style.opacity = 0;
    }
    else {
        homeTitle.style.opacity = 1;
    }
    if (window.scrollY > 0.75*sizeY) {
        sec01Title.style.opacity = 1;
    }
    else {
        sec01Title.style.opacity = 0;
    }
})