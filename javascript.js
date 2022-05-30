const table = document.querySelector('.table-body');
const button = document.getElementById('modal-opener');
const modal = document.querySelector('.modal');
const form = document.getElementById('book-form');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggle = function() {
    this.read = this.read ? false : true;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
}

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
    const bookDelete = document.createElement('td');
    const deleteBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookTitleCell.textContent = bookTitle;
    bookAuthorCell.textContent = bookAuthor;
    bookPagesCell.textContent = bookPages;

    readBtn.textContent = bookRead ? 'Y' : 'N';
    if (bookRead) readBtn.classList.add('read');
    readBtn.addEventListener('click', (e) => toggleRead(e));
    bookReadCell.append(readBtn);

    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', (e) => deleteBook(e));
    bookDelete.append(deleteBtn);

    bookRow.classList.add('book');
    bookRow.appendChild(bookTitleCell);
    bookRow.appendChild(bookAuthorCell);
    bookRow.appendChild(bookPagesCell);
    bookRow.appendChild(bookReadCell);
    bookRow.appendChild(bookDelete);
    table.appendChild(bookRow);
}

function deleteBook(e) {
    index = e.target.parentNode.parentNode.rowIndex - 1;
    myLibrary.splice(index, 1);
    table.deleteRow(index);
}

function toggleRead(e) {
    index = e.target.parentNode.parentNode.rowIndex - 1;
    book = myLibrary[index]
    book.toggle();
    e.target.textContent = book.read ? 'Y' : 'N';
    e.target.classList.toggle('read');
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clearModal() {
    form.reset();
}

button.addEventListener('click', openModal);
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        closeModal();
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let bookTitle = document.querySelector('.book-title').value;
    let bookAuthor = document.querySelector('.book-author').value;
    let bookPages = document.querySelector('.book-pages').value;
    let bookRead = document.querySelector('.book-read').checked;
    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
    displayBook(bookTitle, bookAuthor, bookPages, bookRead);
    closeModal();
    clearModal();
})

testBook1 = new Book('ATOTC', 'Dickens', 489, true);
testBook2 = new Book('GWTW', 'Mitchell', 1037, false);
testBook3 = new Book('1984', 'Orwell', 328, true);
testBook4 = new Book('TKAM', 'Lee', 281, false);
myLibrary.push(testBook1, testBook2, testBook3, testBook4);
displayLibrary();