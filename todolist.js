// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const todoApp = document.querySelector('.todo-app');

// Event listener to add a new task when the button is clicked
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding the task
    } else {
        alert('Please enter a task!');
    }
});

// Function to create a new task item and append it to the list
function addTask(taskText) {
    // Create a new div for the task
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Create a span for the task text
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    // Append task text and delete button to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);

    // Append the task item to the app
    todoApp.appendChild(taskItem);

    // Event listener to remove a task when the delete button is clicked
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });
}
