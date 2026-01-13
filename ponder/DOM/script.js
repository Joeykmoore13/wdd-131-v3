// Selects sthe h1 element and saves that to the var 'title'
let title = document.querySelector("h1");
// console.log(title)
// changes the text content of 'title'
title.textContent = "Web Page Components";

document.getElementById("topics").style.color = 'red';

// Use . for classes and # for ids when using querySelector
// Returns the first element with this class name
let list = document.querySelector(".list");

// Returns a list of all elements with that class
let lists = document.getElementsByClassName('list')
for (let i = 0; i < lists.length; i++) 
{
    lists[i].style.border = '3px solid black';
}

let para = document.querySelector('p');

// Adds a class to an element
para.classList.add('background');

let image = document.querySelector('img');
image.setAttribute('src', 'images/stock.png');
// or do
image.src = 'images/stock.png';

// Code for dropdown menu
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'black';
})

// How to create a new element
const newPara = document.createElement('p');
newPara.innerText = 'Added with JS';

document.body.appendChild(newPara);
