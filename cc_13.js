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

    // Task 4: Attach a click event listener to the "Remove" button that removes its parent employee card using removeChild
    removeButton.addEventListener("click", (event) => {
        employeeContainer.removeChild(card); 

        // Task 4: Use stopPropagation() to prevent the event from bubbling up to the container
        event.stopPropagation(); 
    })

    card.appendChild(removeButton);

    // Task 5: Add an event listener to each employee card (or an edit button within it) that, on double-click, swaps static content with input fields
    const editButton = document.createElement("button");
    editButton.textContent = "Edit"; 
    editButton.addEventListener("click", () => {
        // Pre-populate the input fields with the existing employee name and position.
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = empName.textContent;
        
        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = empPosition.textContent;
        
        // Add a "Save" button that, when clicked, updates the employee card with the new values
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
            empName.textContent = nameInput.value;
            empPosition.textContent = positionInput.value;
            card.replaceChild(empName, nameInput);
            card.replaceChild(empPosition, positionInput);
            card.replaceChild(card.querySelector("button:last-child"), saveButton);
        });
        
        // Ensure the updated details are reflected in the card and revert the inputs back to static text
        card.replaceChild(nameInput, empName);
        card.replaceChild(positionInput, empPosition);
        card.replaceChild(saveButton, card.querySelector("button:last-child"));
    })

    card.appendChild(editButton);

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


// Task 4: Implementing Removal of Employee Cards with Event Bubbling
// Attach a click event listener to the "employeeContainer" that logs a message when any card is clicked
employeeContainer.addEventListener("click", () => {
    console.log("Employee Container Clicked"); 
})


// Task 5: Inline Editing of Employee Details
