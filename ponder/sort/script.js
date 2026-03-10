let nums = [12, 8, 3, 10];

console.log(nums.sort(compareFn));


function compareFn(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}



let simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
simpleList = simpleList.map(function (item) { return item.toLowerCase() })
console.log(simpleList.sort());

let searchTerm = 'an';
console.log(simpleList.filter(searchFruit));
function searchFruit(item) {
    return item.includes(searchTerm);
}



const products = [
    {
        productName: "Wireless Mouse",
        price: 29.99
    },
    {
        productName: "Bluetooth Keyboard",
        price: 49.99
    },
    {
        productName: "Laptop Stand",
        price: 39.99
    }
];

function compare(a, b) {
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;
}

let productSort = products.sort(compare);

console.log(productSort);


const animals = [
    {
        name: "Lion",
        traits: ["brave", "strong", "fierce", "wild"]
    },
    {
        name: "Elephant",
        traits: ["large", "gentle", "smart", "wild"]
    },
    {
        name: "Fox",
        traits: ["sly", "quick", "clever", "wild"]
    },
    {
        name: "Dog",
        traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
        name: "Cat",
        traits: ["quiet", "independent", "curious", "cuddly"]
    }
];

let query = 'dog';
console.log(animals.filter(animalFind))

function animalFind(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

let traitQuery = 'cuddly';

function animalTraitFind(item) {
    return item.traits.find((trait) =>
        trait.toLowerCase().includes(traitQuery.toLowerCase())
    );
}

console.log(animals.filter(animalTraitFind));