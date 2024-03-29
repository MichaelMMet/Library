const authorInput = document.getElementById("author");
const bookContainer = document.querySelector(".book-container");
const newBookButton = document.querySelector(".new-book");
const titleInput = document.getElementById("");
const deleteBookButton = document.querySelector(".remove-book-button");
//const newBookButton = document.querySelector();

const myLibrary = [];


function Book(title, author, pages, read){
  this.title = title

  this.author = author

  this.pages = pages

  this.read = read

  this.changeRead = function(){
    if(this.read.checked = true){
        this.read.checked = false;
    }else{
        this.read.checked = true;
    }
  }
}

newBookButton.addEventListener("click", function(event){
    let enteredTitle = document.getElementById("title").value;
    let enteredAuthor = document.getElementById("author").value;
    let enteredPages = document.getElementById("pages").value;
    let enteredRead = document.getElementById("read").checked;
    console.log(enteredTitle);
    console.log(enteredAuthor);
    console.log(enteredPages);
    console.log(enteredRead);
    event.preventDefault();
    addBookToLirary(enteredTitle, enteredAuthor, enteredPages, enteredRead);

});

/*
deleteBookButton.addEventListener("click", function(event){
    let removedItem = deleteBookButton.parentNode;
    removedItem.remove();

});
*/

function addBookToLirary(Title, Author, Pages, Read){
    let book = new Book(Title, Author, Pages, Read)
    //let author = bookAuthor.ariaValueMax;
    //console.log(book);
    myLibrary.push(book);
    displayBooks();
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
            boxPages.textContent = currentBook.pages;
        let boxRead = document.createElement("p");
        boxRead.textContent = "Status: " + (currentBook.read ? "Read" : "Not Read");

        let removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "Remove Book"
        let changeReadStatus = document.createElement("button");
        changeReadStatus.classList.add("change-read-button");
        changeReadStatus.textContent = "Change read status"





        bookContainer.appendChild(newBox);
        newBox.classList.add("book")
        newBox.appendChild(boxTitle);
        newBox.appendChild(boxAuthor);
        newBox.appendChild(boxPages);
        newBox.appendChild(boxRead);
        newBox.appendChild(removeBookButton);
        newBox.appendChild(changeReadStatus);

        changeReadStatus.addEventListener("click",function(){
            if(boxRead.textContent == "Status: Read"){
                boxRead.textContent = "Status: Not Read";
            }else {
                boxRead.textContent = "Status: Read";
            }
            currentBook.changeRead();
        });

        removeBookButton.addEventListener("click", function(){
            let removedItem = removeBookButton.parentNode;
            removedItem.remove();
        });
    }

}

addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")
addBookToLirary("The Hobbit", "J.R.R. Tolkein", "123 pages", "not Read");
addBookToLirary("Warriors: The Prophecies Begin", "Erin Hunter", "1111 pages", "Read")

//document.querySelector(".remove-book-button").addEventListener('click', removeBook);



displayBooks();

