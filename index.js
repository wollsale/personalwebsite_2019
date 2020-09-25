import './app.scss';


let gallery = document.querySelectorAll('.gallery__image'),
    image = gallery[0],
    body = document.body;

(() => {
    let loader = new Image();
    loader.src = image.currentSrc;

    loader.onload = function () {
        body.classList.add('loaded')
    }
})();


let contactCTA = document.querySelector('.contact-cta');

document.addEventListener('scroll', (e) => {
    let scrolled = document.scrollingElement.scrollTop,
        imageBox = image.getBoundingClientRect();


    // BUTTON
    if (imageBox.y < (window.innerHeight - image.height) / 2) {
        contactCTA.classList.add('contact-cta--is-visible');
    } else {
        contactCTA.classList.remove('contact-cta--is-visible');
    }

    // BOTTOM
    if (window.matchMedia("(min-width: 1024px)").matches) {
        if ((window.innerHeight + scrolled) >= document.body.offsetHeight) {
            contactCTA.classList.add('contact-cta--is-bottom');
        } else {
            contactCTA.classList.remove('contact-cta--is-bottom');
        }
    }
})