


const addNewBook = document.querySelector(".new-book");
let bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
let ifRead =document.querySelector("#read");

//newBook.addEventListener("click", addBookToLirary)

//gets info from the input boxes without sending data
addNewBook.addEventListener("click", function (e) {
e.preventDefault();
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.getElementById("read");
console.log(newRead.checked);

if(document.getElementById("read").checked == true){
  addBookToLirary(newTitle.value, newAuthor.value, newPages.value, "Read");
} else {
  addBookToLirary(newTitle.value, newAuthor.value, newPages.value, "Not Read");
}


  displayBooks();
});


let myLibrary = [];

let title =  document.getElementById("title").value;
console.log(title);
// book cunstructor

function Book(Title, Author, Pages, Read){
this.Title = Title;
this.Author = Author;
this.Pages = Pages;
this.Read = Read;

}

function addBookToLirary(Title, Author, Pages, Read){
let book = new Book(Title, Author, Pages, Read);
myLibrary.push(book);

//console.log(title.innerHTML);
}

function displayBooks(){
  const bookContainer = document.querySelector(".book-container");

  const removeDivs = document.querySelectorAll(".book");
console.log("show how many", removeDivs);
for(let i = 0; i < removeDivs.length; i++){
removeDivs[i].remove();
}


myLibrary.forEach(myLibrary => {

  let newbook = document.createElement("div");
  newbook.classList.add("book");
  bookContainer.appendChild(newbook);

for(let key in myLibrary){
//console.log(`${key}: ${myLibrary[key]}`);
const para = document.createElement("p");
para.textContent = (`${key}: ${myLibrary[key]}`)
newbook.appendChild(para); 

}
})
}

addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")
addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")



displayBooks();

/*
function doThing(){
  e.preventDefault();
  let newTitle = document.querySelector("#title");
  console.log("asddsa");
  addBookToLirary(newTitle.value, "sasa", "ssasd", "iusd");
  displayBooks();
  
}
*/