const add_btn = document.querySelector('.add');
const submit_btn = document.querySelector('.submit-btn');
const overlay = document.querySelector('.overlay');
const checkbox = document.querySelector('#read');
const bookListContainer = document.querySelector('.booklist');

const myLibrary = [];

function Book(title, author, pages, isRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value + " " + "pages";
    const isRead = checkbox.checked;

    const new_book = new Book(title, author, pages, isRead);

    myLibrary.push(new_book);

    renderLibrary();
    resetForm();
    overlay.style.display = 'none';
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
};

function renderLibrary(){
    bookListContainer.innerHTML = '';

    myLibrary.forEach((book) =>{
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-container');

        bookContainer.innerHTML = `
            <p class="book-info" id="book-title">${book.title}</p>
            <p class="book-info" id="book-author">${book.author}</p>
            <p class="book-info" id="book-pages">${book.pages}</p>
            <button class="btn" id="read-not-read">${book.isRead ? 'Finished' : 'Not Finished'}</button>
            <button  class="btn" id="remove-btn">Remove</button>
        `;

        bookContainer.style.border = book.isRead ? '1.5px solid green' : '1.5px solid red'; 

        const toggle_btn = bookContainer.querySelector('#read-not-read');
        toggle_btn.style.background = book.isRead ? 'green' : 'red';

        toggle_btn.addEventListener('click', () => {
            book.toggleRead();
            renderLibrary();
        });

        const remove_btn = bookContainer.querySelector('#remove-btn');
        remove_btn.addEventListener('click', () => {
            myLibrary = myLibrary.filter(book => book.id !== book.id);
            renderLibrary();
        });

        bookContainer.style.display = 'flex';
        bookListContainer.appendChild(bookContainer);
    });
}

function resetForm(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    checkbox.checked = false;
}

submit_btn.addEventListener('click', addBookToLibrary);

add_btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e) => {
    if(e.target === overlay){
        overlay.style.display = 'none';
    }
});