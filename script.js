const add_btn = document.querySelector('.add');
const submit_btn = document.querySelector('.submit-btn');
const overlay = document.querySelector('.overlay');
const checkbox = document.querySelector('#read');
const bookListContainer = document.querySelector('.booklist');

add_btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e) => {
    if(e.target === overlay){
        overlay.style.display = 'none';
    }
});

submit_btn.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value + " " + "pages";

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    bookContainer.innerHTML = `
            <p class="book-info" id="book-title">${title}</p>
            <p class="book-info" id="book-author">${author}</p>
            <p class="book-info" id="book-pages">${pages}</p>
            <button id="read-not-read">${checkbox.checked ? 'Finished' : 'Not Finished'}</button>
            <button id="remove-btn">Remove</button>
    `;

    bookContainer.style.border = checkbox.checked ? '1.5px solid green' : '1.5px solid red'; 


    const toggle_btn = bookContainer.querySelector('#read-not-read');
    toggle_btn.style.background = checkbox.checked ? 'green' : 'red';
    toggle_btn.addEventListener('click', () => {
        if(toggle_btn.textContent === 'Finished'){
            toggle_btn.textContent = 'Not Finished';
            toggle_btn.style.background = 'red';
            bookContainer.style.border = '1.5px solid red'; 
        }
        else{
            toggle_btn.textContent = 'Finished';
            toggle_btn.style.background = 'green';
            bookContainer.style.border = '1.5px solid green'; 
        }
    });

    const remove_btn = bookContainer.querySelector('#remove-btn');
    remove_btn.addEventListener('click', () => {
        bookContainer.remove();
    });

    bookContainer.style.display = 'flex';

    bookListContainer.appendChild(bookContainer);

    overlay.style.display = 'none';
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    checkbox.checked = false;
});