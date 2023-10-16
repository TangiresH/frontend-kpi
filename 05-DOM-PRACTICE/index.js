const form = document.querySelector('#todoForm');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#inputComment');
const DELETE_CLASS = 'deleteBtn';
const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';


form.addEventListener('submit', onFormClick);
ul.addEventListener('click', onUlClick);


function onFormClick(e) {
    const message = getMessage();

    e.preventDefault();

    if (!isMessageValid(message)) {
        alert(`Поле не має бути пустим.`);
        return;
    }

    createToDo(message);
    clear();
}

function getMessage() {
    return input.value;
}

function onUlClick(e) {
    const todoItem = e.target.closest(TODO_ITEM_SELECTOR);

    if (todoItem) {
        if (e.target.classList.contains(DELETE_CLASS)) {
            todoItem.remove();
            return;
        }

        todoItem.classList.toggle(DONE_CLASS);
    }

}

function isMessageValid(message) {
    return message !== '';
}

function createToDo(message) {
    const html = `
    <li class="todoItem">
        <span>${message}</span>
        <button class="deleteBtn">Delete</button>
    </li>
    `;

    ul.insertAdjacentHTML('beforeend', html);
}

function clear() {
    input.value = '';
}
