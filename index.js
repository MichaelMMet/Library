const newBook = document.querySelector(".new-book");
const title = document.querySelector("#title");
// newBook.addEventListener("click", addBookToLirary)
const addBook = document.querySelector(".add-book-button");
addBook.addEventListener("click", displayTheForm);
document.getElementById("add-book-form")



// book cunstructor

function Book(Title, Author, Pages, Read){
this.Title = Title;
this.Author = Author;
this.Pages = Pages;
this.Read = Read;

/*
this.info = function() {
    let info = ""
    return info = Title + " by " + Author + ", " + Pages + " pages, " + Read +".";
  }
  */
}

function addBookToLirary(Title, Author, Pages, Read){
let book = new Book(Title, Author, Pages, Read);
myLibrary.push(book);
displayBooks();
}

const submitBook = document.querySelector(".submit-button");
submitBook.addEventListener("click", intakeFormData);


function intakeFormData(){
  let Title = document.getElementById("Title").value;
  let Author =document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;

  if ((title == "") || (Author == "") || (Pages == "") || (Read ="")){
    return;
  }

  function addBookToLirary(Title, Author, Pages, Read);

  document.getElementById("add-book").reset();
}
 
function displayTheForm(){
  document.getElementById("new-book-form").style.display = "";
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
console.log(`${key}: ${myLibrary[key]}`);
const para = document.createElement("p");
para.textContent = (`${key}: ${myLibrary[key]}`)
newbook.appendChild(para); 

}
})
}
/*
const theHobbit = new Book("The Hobbit", "Peter Jackson", 123, "Read");
myLibrary.push(theHobbit);
displayBooks();
*/
addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")
addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")

displayBooks();



