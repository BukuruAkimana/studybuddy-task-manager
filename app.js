// 1. Select the elements we need
const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.querySelector('ul');

// 2. Add a "listener" to wait for clicks
button.addEventListener('click', function() {
    
    // Get the text the user typed
    const taskText = input.value;

    // Only add if it's not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = taskText;

    // 4. Add it to the list on screen
    list.appendChild(newItem);

    // 5. Clear the input box for the next task
    input.value = "";
});