class Movie {
    constructor(title, date, description, imgSrc, imgAlt, ages, genre, stars) {
        this.title = title;
        this.releaseDate = date;
        this.age = ages;
        this.genre = genre;
        this.rating = stars;
        this.description = description;
        this.imageSource = imgSrc;
        this.altText = imgAlt;
    }
    getScriptTemplate() {
        return `
            <article class="movie">
                <h2 aria-label="Movie title:">${this.title}</h2>
                <img src="${this.imageSource}" alt="${this.altText}">
                <p><strong>Release Date:</strong>${this.releaseDate}</p>
                <p><strong>Recommended Age:</strong>${this.age}</p>
                <p><strong>Genre:</strong>${this.genre}</p>
                <p><strong>Rating:</strong> <span aria-label="${this.rating} out of 5 stars", role="img">${"⭐".repeat(this.rating)}</span></p>
                <p id='desc'>${this.description}</p>
            </article>
            `
    }
}

movieList = []
movieList.push(new Movie(
    "Spider-Man: Into the Spider-Verse",
    "Dec 14, 2018",
    "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    "https://wddbyui.github.io/wdd131/images/spiderman.png",
    "Miles Morales swinging through the city",
    "10+",
    "Action/Adventure",
    5))


movieList.push(new Movie(
    "The Other Side of Heaven",
    "December 14, 2001",
    "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    "https://wddbyui.github.io/wdd131/images/heaven.png",
    "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    "10+",
    "Drama/Religious",
    4));


movieList.push(new Movie(
    "Luca",
    "June 18, 2021",
    "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    "https://wddbyui.github.io/wdd131/images/luca.png",
    "Luca and Alberto standing on the beach",
    "6+",
    "Family/Fantasy",
    4
));

movieList.push(new Movie(
    "17 Miracles",
    "June 3, 2011",
    "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    "12+",
    "Historical/Religious",
    4
))


let movieListElement = document.getElementById('movie-list');

let html;
for (let i = 0; i < movieList.length; i++) {
    html = html + movieList[i].getScriptTemplate();
}

movieListElement.innerHTML = html;








