function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        var task = document.createElement('div');
        task.className = 'task';
        task.draggable = true;
        task.id = 'task-' + new Date().getTime(); // Generate unique ID for the task
        task.innerHTML = taskInput;
        task.addEventListener('click', toggleTaskCompleted); // Add event listener for clicking task
        task.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        document.getElementById('todo').appendChild(task);
        document.getElementById('taskInput').value = '';
    }
}

function toggleTaskCompleted(event) {
    var task = event.target;
    var columnId = task.closest('.column').id;
    if (columnId === 'done') { // Check if the task is in the "Done" column
        task.classList.toggle('completed'); // Toggle the "completed" class on the clicked task
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var task = document.getElementById(data);
    var columnId = event.target.closest('.column').id;
    if (columnId === 'todo' || columnId === 'inprogress' || columnId === 'done') {
        document.getElementById(columnId).appendChild(task);
    }
}


