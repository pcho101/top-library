let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let bookTitle = prompt('Title','Hobbit');
    let bookAuthor = prompt('Author', 'JK');
    let bookPages = prompt('num of pages', 295);
    let bookRead = prompt('read?', false);
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
}

const library = document.querySelector('.library');

function displayLibrary() {
    for (const book of myLibrary) {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.textContent = book.title + book.author + book.pages;
        library.appendChild(bookElement);
    }
}

testBook1 = new Book('ASOIAF','Martin',700,false);
testBook2 = new Book('LOTD','Tolkien',500,false);
testBook3 = new Book('OFOTCN','Kesey',300,true);
testBook4 = new Book('TKAM','Harper',200,true);
myLibrary.push(testBook1, testBook2, testBook3, testBook4);