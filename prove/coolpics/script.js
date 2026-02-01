const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
    document.getElementById("alt-nav").hidden = true;
    document.getElementById("mobile-nav").hidden = false;
} else {
    document.getElementById("alt-nav").hidden = false;
    document.getElementById("mobile-nav").hidden = true;
}

window.addEventListener('resize', function (event) {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    if (mediaQuery.matches) {
        document.getElementById("alt-nav").hidden = true;
        document.getElementById("mobile-nav").hidden = false;
    } else {
        document.getElementById("alt-nav").hidden = false;
        document.getElementById("mobile-nav").hidden = true;
    }
}, true);

const images = document.getElementById("images");
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const close_button = document.getElementById("close-button");


images.addEventListener('click', openModal);

function openModal(e) {
    console.log(e);
    const image = e.target;
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');

    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}

close_button.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const menu_button = document.getElementById("mobile-nav");
menu_button.addEventListener('click', displayNav);

function displayNav() {
    console.log("Ran displayNav");
    const alt_nav = document.getElementById('alt-nav');
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    console.log(mediaQuery);
    if (mediaQuery.matches) {
        if (alt_nav.hidden == true) {
            alt_nav.hidden = false
        }
        else {
            alt_nav.hidden = true
        }
    }
}
// alt-nav

