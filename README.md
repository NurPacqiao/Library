# 📚 Library App

A simple JavaScript project that lets you manage a collection of books in your browser.  
You can add new books, mark them as read or unread, and remove them — all without refreshing the page.

## ✨ Features
- **Add Books**: Enter title, author, pages, and whether you've read it.
- **Toggle Read Status**: Switch between "Finished" and "Not Finished".
- **Remove Books**: Delete a book from your library.
- **Persistent Data Structure**: All books are stored in an array for easy rendering.
- **Unique Book IDs**: Uses `crypto.randomUUID()` to assign a unique identifier to each book.
- **Modal Form**: A pop-up form with blurred background for adding books.
- **Interactive UI**: Smooth hover effects and visual feedback on book cards.

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## 📸 Preview
<img width="1426" height="775" alt="Screenshot 2025-09-06 at 16 08 30" src="https://github.com/user-attachments/assets/184a9e72-93f0-4836-9367-8b4158bca206" />
<img width="1390" height="771" alt="Screenshot 2025-09-06 at 16 05 49" src="https://github.com/user-attachments/assets/dc393579-c803-4d9c-a5ac-3fd4060345ce" />


## 📂 Project Structure
.
├── index.html    # Main HTML structure
├── style.css     # Styling for the UI
├── script.js     # JavaScript functionality
└── StoryScript-Regular.ttf # Custom font (optional)

## 🚀 How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/NurPacqiao/library-app.git
2.	Open index.html in your browser.

📝 Assignment Requirements Covered
	•	Constructor function for creating book objects.
	•	addBookToLibrary() function to push books into an array.
	•	Unique book IDs generated with crypto.randomUUID().
	•	renderLibrary() function to loop through the array and display books.
	•	Separate logic for data (book array) and UI rendering.
	•	Event listeners for adding, removing, and toggling books.
	•	event.preventDefault() to prevent form submission from refreshing the page.
	•	Styled form overlay/modal with blur background.

📌 Future Improvements
	•	Local storage to save the library between page reloads.
	•	Editable book details.
	•	Sorting and filtering books.
	•	Responsive mobile design.

Author: Nurlan
License: MIT
Do you want me to also give you a **GitHub badge-styled version** so it looks cooler on your repo page?
