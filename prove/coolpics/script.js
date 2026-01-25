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

