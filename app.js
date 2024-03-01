const input = document.getElementById('input');
const taskList = document.getElementById('taskList');

function addTask() {
    if (input.value === '') {
        alert('Please enter a task');
        return;
    }
    const task = document.createElement('li');
    task.innerText = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    input.value = '';
    task.addEventListener('click', () => {
        task.classList.toggle('done');
    });
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        task.remove();
    });
}