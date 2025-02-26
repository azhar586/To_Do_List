document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    const daySelect = document.getElementById('day-select');
    const timeInput = document.getElementById('time-input');
    const prioritySelect = document.getElementById('priority-select');

    if (taskText !== "" && daySelect.value && timeInput.value && prioritySelect.value) {
        addTask(taskText, daySelect.value, timeInput.value, prioritySelect.value);
        taskInput.value = ""; // clear input
        daySelect.value = ""; // reset day
        timeInput.value = ""; // reset time
        prioritySelect.value = "low"; // reset priority
    }
});

function addTask(taskText, day, time, priority) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = `${taskText} - ${day} at ${time}`;

    const priorityClass = `${priority}-priority`;
    taskItem.classList.add(priorityClass);

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.appendChild(taskTextNode);
    taskItem.appendChild(removeButton);

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
}
