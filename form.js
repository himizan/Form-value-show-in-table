function submitForm() {
    // Get form data
    var formData = {
        serialNumber: document.getElementById('input1').value,
        email: document.getElementById('input2').value,
        name: document.getElementById('input3').value,
        task: document.getElementById('input4').value,
    };

    // Validate if any field is empty
    if (Object.values(formData).some(value => value === '')) {
        alert('Please fill in all fields.');
        return;
    }

    // Add data to table
    addRowToTable(formData);

    // Clear form fields
    document.getElementById('formData').reset();
}

function addRowToTable(data) {
    var tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();

    // Add cells to the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Set cell values
    cell1.textContent = data.serialNumber;
    cell2.textContent = data.name;
    cell3.textContent = data.email;
    cell4.textContent = data.task;

    // Add delete button to cell5
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        deleteRowFromTable(newRow);
    };
    cell5.appendChild(deleteButton);
}

function deleteRowFromTable(row) {
    var tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.removeChild(row);
}