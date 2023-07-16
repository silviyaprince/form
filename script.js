document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foods = document.querySelectorAll('input[name="food"]:checked');
    const foodArray = Array.from(foods).map(food => food.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    // Append values to the table
    const table = document.getElementById('dataTable');
  const newRow = table.insertRow();

  // Insert the cells with form values
  const cells = [];
  for (let i = 0; i < 8; i++) {
    cells.push(newRow.insertCell(i));
  }
  cells[0].textContent = firstName;
  cells[1].textContent = lastName;
  cells[2].textContent = address;
  cells[3].textContent = pincode;
  cells[4].textContent = gender;
  cells[5].textContent = foodArray.join(', ');
  cells[6].textContent = state;
  cells[7].textContent = country;

  // Clear form fields
  document.getElementById('myForm').reset();
});