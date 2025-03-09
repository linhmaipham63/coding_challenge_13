// Task 1: Creating the Base Structure


// Task 2: Adding Employee Cards Dynamically

// Write a function that uses createElement to build an employee card
function createEmployeeCard(id, name, position) {
    const employeeContainer = document.getElementById("employeeContainer");
    const card = document.createElement("div"); 

    // Set attributes (such as class and id) using setAttribute
    card.setAttribute("id", id);
    card.setAttribute("class", "employee-card"); 

    // Add information in each employee card
    const empName = document.createElement("h2"); // Add a heading for the employee’s name
    empName.textContent = name;
    const empPosition = document.createElement("p"); // Add a paragraph for the employee’s position
    empPosition.textContent = position; 

    card.appendChild(empName);
    card.appendChild(empPosition);

    // Create Remove button for deleting the card
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; 

    card.appendChild(removeButton);

    // Append the employee card to the "employeeContainer" using appendChild
    employeeContainer.appendChild(card); 
}

// Add new employee cards to the dashboard
createEmployeeCard("emp1", "John Smith", "Manager");
createEmployeeCard("emp2", "Linh Pham", "Data Analyst"); 
createEmployeeCard("emp3", "Liz Jones", "Sales Associate"); 


// Task 3: Converting NodeLists to Arrays for Bulk Updates

// Use document.querySelectorAll to select all elements with the employee card class
const employeeCardsNodeList = document.querySelectorAll(".employee-card"); 

// Convert the NodeList into an array using Array.from
const employeeCardsArray = Array.from(employeeCardsNodeList); 

// Use array method to update each card’s style or add a highlighting class
employeeCardsArray.forEach(card => {
    card.style.backgroundColor = "lightblue"; 
    card.style.border = "2px solid blue"; 
})

