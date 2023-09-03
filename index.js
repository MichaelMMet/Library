const authorInput = document.getElementById("author");
const bookContainer = document.querySelector(".book-container");
const newBookButton = document.querySelector(".new-book");
const titleInput = document.getElementById("");
//const newBookButton = document.querySelector();

const myLibrary = [];


function Book(title, author, pages, read){
  this.title = title

  this.author = author

  this.pages = pages

  this.read = read
}

newBookButton.addEventListener("click", function(){
    addBookToLirary();

});

function addBookToLirary(Title, Author, Pages, Read){
    let book = new Book(Title, Author, Pages, Read)
    //let author = bookAuthor.ariaValueMax;
    //console.log(book);
    myLibrary.push(book);
}

function displayBooks(){
    while(myLibrary.length != 0){
        let currentBook = myLibrary.pop();

        let newBox = document.createElement("div");
        let boxAuthor = document.createElement("p");
            boxAuthor.textContent = currentBook.author;
        let boxTitle = document.createElement("p");
            boxTitle.textContent = currentBook.title;
        let boxPages = document.createElement("p");
            boxPages.textContent = currentBook.pages
        let boxRead = document.createElement("p");
        bookContainer.appendChild(newBox);
        newBox.classList.add("book")
        newBox.appendChild(boxTitle);
        newBox.appendChild(boxAuthor);
        newBox.appendChild(boxPages);
    }

}

addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")
addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")



displayBooks();

