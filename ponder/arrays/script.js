let output = document.getElementById('text');

let pets = ['goldfish', 'dog', 'rhino']

console.log(pets.length);

pets[3] = 'bunny';
console.log(pets);



const steps = ['one', 'two', 'three']

function showSteps(item){
    console.log(item);
}

let myList = document.querySelector('#myList');
steps.forEach(showSteps);
const stepsHtml = steps.map(listTemplate);

function listTemplate(item){
    return `<li>${item}</li>`;
}

myList.innerHTML = stepsHtml.join('');


let grades = ['A', 'B', 'D'];
let points;
let gpaPoints = grades.map(convert);

console.log(gpaPoints);


function convert(grade) {
    switch (grade.toLowerCase()){
        case 'a':
            return 4;
        case 'b':
            return 3;
        case 'c':
            return 2;
        case 'd':
            return 1;
        case 'f':
            return 0;
        default:
            alert('not a valid grade');
    }
    return points;
}
          

let totalPoints = gpaPoints.reduce(getTotal);
console.log(`GPA: ${totalPoints/gpaPoints.length}`);

function getTotal(total, item){
    return total + item;
}



const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter(function(word){
    return word.length < 6;
})
console.log(shortWords);