// 1. Select the elements we need
const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.querySelector('ul');

// 2. Add a "listener" to wait for clicks
button.addEventListener('click', function() {
    
    // Get the text
    const taskText = input.value;

    // Validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. Create the new list item
    const newItem = document.createElement('li');
    
    // --- NEW PART START ---
    // We put the text in a span so it sits next to the button nicely
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    
    // Create the Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px"; // Adds a little space
    deleteBtn.style.color = "red";       // Make it red for danger!

    // Make the delete button work
    deleteBtn.addEventListener('click', function() {
        // This removes the specific item this button belongs to
        newItem.remove();
    });

    // Add the text and the button to the list item
    newItem.appendChild(textSpan);
    newItem.appendChild(deleteBtn);
    // --- NEW PART END ---

    // 4. Add it to the main list
    list.appendChild(newItem);

    // 5. Clear input
    input.value = "";
});