const form = document.getElementById('to_do_form');
const input = document.getElementById('to_do_input');
const todoList = document.getElementById('to_do_list');

function createTodoElement(text) {
    const listItem = document.createElement('li');
    listItem.className = 'to_do-item';

    const leftSection = document.createElement('div');
    leftSection.className = 'to_do_left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'to_do_text';

    checkbox.addEventListener('change', function () {
        span.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });

    leftSection.append(checkbox, span);
    listItem.append(leftSection, deleteButton);
    
    return listItem;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        todoList.appendChild(createTodoElement(taskText));
        input.value = '';
    }
});

document.querySelectorAll('#to_do_list li').forEach(li => {
    const text = li.textContent.trim();
    if (text) {
        const newLi = createTodoElement(text);
        li.replaceWith(newLi);
    } else {
        li.remove();
    }
});