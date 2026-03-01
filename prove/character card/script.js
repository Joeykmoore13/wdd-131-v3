card = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    img : "images/snortleblat.webp",
    alt : "image of a creature that look like a humanoid aligator in a swamp",

    attacked: function () {
        if (this.health <= 0){
            alert(`${this.name} already died`);
            return;
        }
        this.health -= 20;
        document.getElementById("health").textContent = `Health: ${this.health}`;
        if (this.health <= 0)
        {
            alert(`${this.name} died!`);
        }
    },

    levelUp: function () {
        console.log(`Level: ${this.level}`);
        this.level += 1;
        document.getElementById("level").textContent = `Level: ${this.level}`;
        console.log(`Level: ${this.level}`);
    }
}

document.getElementById("name").textContent = card.name;
document.getElementById("class").textContent = `Class: ${card.class}`;
document.getElementById("health").textContent = `Health: ${card.health}`;
document.getElementById("level").textContent = `Level: ${card.level}`;
document.querySelector("img").src = card.img;
document.querySelector("img").alt = card.alt;


let attackedButton = document.getElementById("attacked");
let levelbutton = document.getElementById("level-up");

attackedButton.addEventListener("click", () => card.attacked());
levelbutton.addEventListener("click", () => card.levelUp());
