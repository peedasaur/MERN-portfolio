const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const todoCount = document.getElementById('todoCount');
const doneCount = document.getElementById('doneCount');

function updateCounts() {
    todoCount.textContent = todoList.children.length;
    doneCount.textContent = doneList.children.length;
}

function handleEnter(e) {
    if (e.key === 'Enter') addTask();
}

function createTaskElement(text, isDone) {
    const li = document.createElement('li');
    if (isDone) li.classList.add('completed');

    li.innerHTML = `
        <span class="text">${text}</span>
        <div class="actions">
            ${!isDone ? `<button class="btn-check" onclick="completeTask(this)"><i class="fas fa-check"></i></button>` : ''}
            <button class="btn-delete" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;
    return li;
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    todoList.appendChild(createTaskElement(text, false));
    taskInput.value = '';
    updateCounts();
}

window.completeTask = function (btn) {
    const li = btn.closest('li');
    const text = li.querySelector('.text').textContent;

    // Animation before move
    li.style.transform = 'translateX(50px)';
    li.style.opacity = '0';

    setTimeout(() => {
        li.remove();
        doneList.appendChild(createTaskElement(text, true));
        updateCounts();
    }, 300);
}

window.deleteTask = function (btn) {
    const li = btn.closest('li');
    li.style.transform = 'scale(0.9)';
    li.style.opacity = '0';

    setTimeout(() => {
        li.remove();
        updateCounts();
    }, 300);
}
