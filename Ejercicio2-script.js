const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const li = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        li.remove(); 
    };

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);
    
    taskContent.onclick = function() {
        li.classList.toggle('completed');
    };

    taskList.appendChild(li);
    
    taskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
