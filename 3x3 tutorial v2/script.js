// Collapsable sections: 
let sectionButtons = {}

document.getElementById("basics-button").addEventListener("click", toggleCollapse)
sectionButtons["basics-button"] = document.getElementById("basics");
sectionButtons["basics-button"].classList.toggle('hidden');

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

    if (document.querySelector(`#${this.id} p`).textContent == '+') 
    {
        document.querySelector(`#${this.id} p`).textContent = '-';
    }
    else 
    {
        document.querySelector(`#${this.id} p`).textContent = '+';
    }
}



let notationButton = document.getElementById("button_div");
let notationOpen = false
notationButton.addEventListener('click', toggleNotation);
document.getElementById("closebtn").addEventListener('click', closeNotation);

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
    document.getElementById("sidebar").style.width = "15%";
    document.getElementById("sidebar").style.border = "7px solid black";
}

function closeNotation() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.border = "none"
}

window.onscroll = function () { sidebarScroll() }

function sidebarScroll() {
    var logoheight = document.querySelector("#logo");

    let notation = document.getElementById("button_div");
    let nav = document.getElementById("sidebar-nav");

    if (document.documentElement.scrollTop > logoheight.clientHeight) {
        if (notation.classList.contains("notation-relative")) {
            notation.classList.remove("notation-relative");
            notation.classList.add("notation-fixed");
        }
        if (nav.classList.contains("sidebar-nav-relative")) {
            nav.classList.remove("sidebar-nav-relative");
            nav.classList.add("sidebar-nav-fixed");
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
        }
    }
}