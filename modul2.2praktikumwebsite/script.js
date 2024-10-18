let tasks = [];
let editingTaskIndex = null;

// Function to add task
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = {
        text: '🗂️ ' + taskText,
        completed: false
    };

    tasks.push(task);
    input.value = '';
    renderTasks();
}

// Function to handle 'Enter' keypress
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

// Function to render tasks
function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            <input type="checkbox" onclick="toggleComplete(${index})" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="btn edit-btn" onclick="editTask(${index})">Edit</button>
                <button class="btn delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit task
function editTask(index) {
    editingTaskIndex = index;
    const task = tasks[index];
    document.getElementById('edit-input').value = task.text;
    document.getElementById('edit-modal').style.display = 'block';
}

// Function to update task
function updateTask() {
    const newTaskText = document.getElementById('edit-input').value.trim();
    if (newTaskText === '') return;
    tasks[editingTaskIndex].text = newTaskText;
    closeModal();
    renderTasks();
}

// Function to close modal
function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
}
