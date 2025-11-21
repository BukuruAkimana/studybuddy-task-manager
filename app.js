const input = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput'); // Select the time picker
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', function() {
    
    const taskText = input.value;
    const deadlineValue = timeInput.value; // Get the date string

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create List Item
    const newItem = document.createElement('li');
    
    // Create a container for the text and button (Top Row)
    const rowDiv = document.createElement('div');
    rowDiv.className = 'task-row';

    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = "Delete";

    // Add to Row
    rowDiv.appendChild(textSpan);
    rowDiv.appendChild(deleteBtn);

    // --- COUNTDOWN LOGIC START ---
    const timerSpan = document.createElement('span');
    timerSpan.className = 'timer';
    
    let countdownInterval; // Variable to hold the timer ID

    if (deadlineValue) {
        const targetDate = new Date(deadlineValue).getTime();

        // Update the count down every 1 second (1000 milliseconds)
        countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            timerSpan.textContent = `Due in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(countdownInterval);
                timerSpan.textContent = "EXPIRED";
                timerSpan.classList.add("expired");
            }
        }, 1000);
    } else {
        timerSpan.textContent = "No deadline set";
    }
    // --- COUNTDOWN LOGIC END ---

    // Delete Button Logic
    deleteBtn.addEventListener('click', function() {
        // Stop the timer from running in the background
        if (countdownInterval) clearInterval(countdownInterval);
        newItem.remove();
    });

    // Assemble the final item
    newItem.appendChild(rowDiv);
    newItem.appendChild(timerSpan); // Add timer below text
    list.appendChild(newItem);

    // Clear inputs
    input.value = "";
    timeInput.value = "";
});