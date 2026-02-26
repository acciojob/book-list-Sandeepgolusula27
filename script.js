//your JS code here. If required.
// 1. Select DOM elements
const submitBtn = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');

// 2. Event Listener for Adding a Book
submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate inputs
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create a new row (tr)
    const row = document.createElement('tr');

    // Add columns (td) and a delete button
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger btn-sm">X</button></td>
    `;

    // Append the row to the table body
    bookList.appendChild(row);

    // Clear the input fields after adding
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
});

// 3. Event Listener for Deleting a Book (Event Delegation)
bookList.addEventListener('click', (e) => {
    // Check if the clicked element is a delete button
    if (e.target.classList.contains('delete')) {
        // Remove the entire row (the parent of the parent of the button)
        e.target.parentElement.parentElement.remove();
    }
});