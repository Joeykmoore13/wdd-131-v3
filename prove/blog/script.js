class Book {
    constructor(title, date, description, imgSrc, imgAlt, ages, genre, rating)
    {
        this.title = title
        this.release_date = date
        this.ages = ages
        this.genre = genre
        this.rating = rating
        this.description = description
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
    }
    getBookHTML()
    {
        return `
        <div class="book">
                <div class="book-info">
                    <p>${this.release_date}</p>
                    <p>${this.ages}</p>
                    <p>${this.genre}</p>
                    <p><span aria-label="${this.rating} out of 5 stars" , role="img">${"⭐".repeat(this.rating)}</span></p>
                </div>
                <div class="vertical-line"></div>
                <div class="book-description">
                    <h2>${this.title}</h2>
                    <img src="${this.imgSrc}" alt="${this.imgAlt}">
                    <p>${this.description}</p>
                </div>
            </div>`
    }
}



let book_list_element = document.getElementById("book-list");
let book_list = []

book_list.push(new Book(
        'Septimus Heap Book One: Magyk',
		'July 5, 2022',
		'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		'Book cover for Septimus Heap 1',
		'10-14',
		'Fantasy',
		4
))

book_list.push(new Book(
    'Magnus Chase Book One: Sword of Summer',
    'December 12, 2021',
    'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    'Book cover for Magnus Chase 1',
    '12-16',
    'Fantasy',
    4
    ))

book_list.push(new Book(
    "Belgariad Book One: Pawn of Prophecy",
    "Feb 12, 2022",
    "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    "Book cover for Pawn of Prophecy",
    "12-16",
    "Fantasy",
    5
))

let books_html = ""
for (let i = 0; i < book_list.length; i++)
{
    books_html = books_html + book_list[i].getBookHTML()
}
book_list_element.innerHTML = books_html 
