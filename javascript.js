let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
}

const library = document.querySelector('.library');
const table = document.querySelector('.table-body');

function displayLibrary() {
    for (const book of myLibrary) {
        displayBook(book.title, book.author, book.pages, book.read)
    }
}

function displayBook(bookTitle, bookAuthor, bookPages, bookRead) {
    const bookRow = document.createElement('tr');
    const bookTitleCell = document.createElement('td');
    const bookAuthorCell = document.createElement('td');
    const bookPagesCell = document.createElement('td');
    const bookReadCell = document.createElement('td');
    bookTitleCell.textContent = bookTitle;
    bookAuthorCell.textContent = bookAuthor;
    bookPagesCell.textContent = bookPages;
    bookReadCell.textContent = bookRead;
    bookRow.classList.add('book');
    bookRow.appendChild(bookTitleCell);
    bookRow.appendChild(bookAuthorCell);
    bookRow.appendChild(bookPagesCell);
    bookRow.appendChild(bookReadCell);
    table.appendChild(bookRow);
}

let button = document.getElementById('modal-opener');
let modal = document.querySelector('.modal');

button.addEventListener('click', openModal);
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        closeModal();
    }
});

function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}

let form = document.getElementById('book-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let bookTitle = document.querySelector('.book-title').value;
    let bookAuthor = document.querySelector('.book-author').value;
    let bookPages = document.querySelector('.book-pages').value;
    let bookRead = document.querySelector('.book-read').checked;
    console.log(bookTitle, bookAuthor, bookPages, bookRead);
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    displayBook(bookTitle, bookAuthor, bookPages, bookRead);
})

testBook1 = new Book('ASOIAF','Martin',700,false);
testBook2 = new Book('LOTD','Tolkien',500,false);
testBook3 = new Book('OFOTCN','Kesey',300,true);
testBook4 = new Book('TKAM','Harper',200,true);
myLibrary.push(testBook1, testBook2, testBook3, testBook4);
displayLibrary();