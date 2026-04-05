// Collapsable sections: 
let sectionButtons = {}

// document.getElementById("basics-button").addEventListener("click", toggleCollapse)
// sectionButtons["basics-button"] = document.getElementById("basics");
// sectionButtons["basics-button"].classList.toggle('hidden');

document.getElementById("white-cross-button").addEventListener("click", toggleCollapse)
sectionButtons["white-cross-button"] = document.getElementById("white-cross");
sectionButtons["white-cross-button"].classList.toggle('hidden');

document.getElementById("white-corners-button").addEventListener("click", toggleCollapse);
sectionButtons["white-corners-button"] = document.getElementById("white-corners");
sectionButtons["white-corners-button"].classList.toggle('hidden');

document.getElementById("second-layer-button").addEventListener("click", toggleCollapse);
sectionButtons["second-layer-button"] = document.getElementById("second-layer");
sectionButtons["second-layer-button"].classList.toggle('hidden');

document.getElementById("yellow-cross-button").addEventListener("click", toggleCollapse);
sectionButtons["yellow-cross-button"] = document.getElementById("yellow-cross");
sectionButtons["yellow-cross-button"].classList.toggle('hidden');

document.getElementById("permute-edges-button").addEventListener("click", toggleCollapse);
sectionButtons["permute-edges-button"] = document.getElementById("permute-edges");
sectionButtons["permute-edges-button"].classList.toggle('hidden');

document.getElementById("permute-corners-button").addEventListener("click", toggleCollapse);
sectionButtons["permute-corners-button"] = document.getElementById("permute-corners");
sectionButtons["permute-corners-button"].classList.toggle('hidden');

document.getElementById("orient-corners-button").addEventListener("click", toggleCollapse);
sectionButtons["orient-corners-button"] = document.getElementById("orient-corners");
sectionButtons["orient-corners-button"].classList.toggle('hidden');

function toggleCollapse() {
    sectionButtons[this.id].classList.toggle('hidden');

    if (document.querySelector(`#${this.id} p`).textContent == '+') {
        document.querySelector(`#${this.id} p`).textContent = '-';
    }
    else {
        document.querySelector(`#${this.id} p`).textContent = '+';
    }
}



let notationButton = document.getElementById("button_div");
let notationOpen = false
notationButton.addEventListener('click', toggleNotation);
document.getElementById("closebtn").addEventListener('click', closeNotation);

document.getElementById("notation-sidebar-button").addEventListener('click', toggleSidebarNav);
let navOpen = false

// onclick="closeNav()"
// Notation reminder button
// Also add the side-bar nav to this code

function toggleNotation() {
    if (notationOpen) {
        closeNotation();
        notationOpen = false;
    }
    else {
        openNotation();
        notationOpen = true;
    }
}

function openNotation() {
    document.querySelector(".sidebar").classList.add("open-sidebar");
}

function closeNotation() {
    document.querySelector(".sidebar").classList.remove("open-sidebar");
}

function toggleSidebarNav() {
    console.log("Called toggleSidebarNav");
    console.log(navOpen);
    if (navOpen) {
        closeSidebarNav();
        navOpen = false;
    }
    else {
        openSidebarNav();
        navOpen = true;
    }
}

function openSidebarNav() {
    console.log("Ran openSidebarNav");
    document.querySelector(".sidebar-nav").classList.add("open-nav");
}

function closeSidebarNav() {
    console.log("Ran closeSidebarNav");
    document.querySelector(".sidebar-nav").classList.remove("open-nav");
}

window.onscroll = function () { sidebarScroll() }

function sidebarScroll() {
    var logoheight = document.querySelector("#logo");

    let notation = document.getElementById("button_div");
    let nav = document.querySelector(".sidebar-nav");
    let side = document.getElementById("notation-sidebar-button");

    if (document.documentElement.scrollTop > logoheight.clientHeight) {
        if (notation.classList.contains("notation-relative")) {
            notation.classList.remove("notation-relative");
            notation.classList.add("notation-fixed");

        }
        if (nav.classList.contains("sidebar-nav-relative")) {
            nav.classList.remove("sidebar-nav-relative");
            nav.classList.add("sidebar-nav-fixed");

            side.classList.remove("sidebar-button-relative");
            side.classList.add("sidebar-button-fixed");


        }
    }
    else {
        if (notation.classList.contains("notation-fixed")) {
            notation.classList.remove("notation-fixed");
            notation.classList.add("notation-relative");
        }
        if (nav.classList.contains("sidebar-nav-fixed")) {
            nav.classList.remove("sidebar-nav-fixed");
            nav.classList.add("sidebar-nav-relative");

            side.classList.remove("sidebar-button-fixed");
            side.classList.add("sidebar-button-relative");
        }
    }
}