


const addNewBook = document.querySelector(".new-book");
let bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const showIt = document.querySelector(".show-form");
let count = 2;

showIt.addEventListener("click", showForm);

function showForm() {
  console.log(count);
  if (count % 2 == 0) {
    document.getElementById("addBookForm").style.display = "";
    count++;
    showIt.innerHTML = "Hide Form";
  } else {
    document.getElementById("addBookForm").style.display = "none";
    count++;
    showIt.innerHTML = "Show Form";
  }

}

//newBook.addEventListener("click", addBookToLirary)

//gets info from the input boxes without sending data
addNewBook.addEventListener("click", function (e) {
  e.preventDefault();
  let newTitle = document.querySelector("#title");
  let newAuthor = document.querySelector("#author");
  let newPages = document.querySelector("#pages");
  let newRead = document.getElementById("read");
  console.log(newRead.checked);



  if (document.getElementById("read").checked == true) {
    addBookToLirary(newTitle.value, newAuthor.value, newPages.value, "Read");
  } else {
    addBookToLirary(newTitle.value, newAuthor.value, newPages.value, "Not Read");
  }


});


let myLibrary = [];

let title = document.getElementById("title").value;
console.log(title);
// book cunstructor

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;

}

function addBookToLirary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
  displayBooks();

  //console.log(title.innerHTML);
}

function displayBooks() {
  const bookContainer = document.querySelector(".book-container");

  const removeDivs = document.querySelectorAll(".book");
  console.log("show how many", removeDivs);
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

  let index = 0;
  myLibrary.forEach(myLibrary => {

    let newbook = document.createElement("div");
    newbook.classList.add("book");
    bookContainer.appendChild(newbook);

    //Create remove book button and add class atribute for each array card
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove from Library";
    console.log("show me my current array objects inside each forEach...", myLibrary);

    //Link the data attribute of the remove button to the array and card
    removeBookButton.dataset.linkedArray = index;
    index++;
    console.log("hsow me dataset link back to the array...", removeBookButton.dataset.linkedArray);
    newbook.appendChild(removeBookButton);

    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBook = removeBookButton.dataset.linkedArray;
      console.log("Attempting to remove array item via data attribute...", parseInt(retrieveBook));
      myLibrary.splice(parseInt(retrieveBook), 1);
      newbook.remove();
      displayBooks();
    }


    for (let key in myLibrary) {
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