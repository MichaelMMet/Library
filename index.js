const newBook = document.querySelector(".new-book");



newBook.addEventListener("click", addBookToLirary)

let myLibrary = [];




function Book(Title, Author, Pages, Read){
this.Title = Title;
this.Author = Author;
this.Pages = Pages;
this.Read = Read;
this.info = function() {
    let info = ""
    return info = Title + " by " + Author + ", " + Pages + " pages, " + Read +".";
  }
}


function addBookToLirary(Title, Author, Pages, Read){
let book = new Book(Title, Author, Pages, Read);
myLibrary.push(book);
}


function displayBooks(){

  const bookContainer = document.querySelector(".book-container");


myLibrary.forEach(myLibrary => {

  let newbook = document.createElement("div");
  newbook.classList.add(".book");
  bookContainer.appendChild(newbook);
 
for(let key in myLibrary){
console.log(`${key}: ${myLibrary[key]}`);
const para = document.createElement("p");
para.textContent = (`${key}: ${myLibrary[key]}`)
newbook.appendChild("para");


}

})


const theHobbit = new Book("The Hobbit", "Peter Jackson", 123, "Read");
myLibrary.push(theHobbit);
displayBooks();