const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
    // FAILS: Not preventing default might cause a page reload before the test can check the row
    
    const title = document.querySelector('#title').value;

    // FAILS: Appending to the wrong element or using wrong structure
    const table = document.querySelector('.table'); 
    const newDiv = document.createElement('div'); // Tests expect a <tr>
    newDiv.textContent = title; 
    table.appendChild(newDiv);
});
