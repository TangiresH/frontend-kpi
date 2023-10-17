'use strict';

const DELETE_BTN_CLASS = 'deleteBtn';
const TODO_ITEM_SELECTOR = '.todoItem';
const DONE_CLASS = 'done';
const HOVER_CLASS = 'hover';
const ul = document.querySelector('#todoList');
const input = document.querySelector('#msgInput');
const form = document.querySelector('#todoForm');

form.addEventListener('submit', onFormClick);
ul.addEventListener('click', onUlClick);
ul.addEventListener('mouseover', onUlMousover);
ul.addEventListener('mouseout', onUlMouseleave);

main();

function main() {
  TodoApi.getList()
      .then((todoList) => {
        renderTodoList(todoList);
      });
}

function onFormClick(e) {
  e.preventDefault();

  const todo = getTodo();

  if (!isMessageValid(todo)) {
    alert('Поле не має бути порожнім.');
    return;
  }

  TodoApi.create(todo)
      .then((newTodo) => {
        renderTodo(newTodo);
        clear();
      });
}

function onUlClick(e) {
  const todoItem = getTodoEl(e.target);
  const id = getTodoElId(todoItem);

  if (todoItem) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      TodoApi.delete(id)
          .then(() => {
            todoItem.remove();
          });
      return;
    }

    todoItem.classList.toggle(DONE_CLASS);
  }
}

function onUlMouseleave(e) {
  const todoItem = getTodoEl(e.target);

  if (todoItem) {
    todoItem.classList.remove(HOVER_CLASS);
  }
}

function onUlMousover(e) {
  const todoItem = getTodoEl(e.target);

  if (todoItem) {
    todoItem.classList.add(HOVER_CLASS);
  }
}
function getTodoEl(el) {
  return el.closest(TODO_ITEM_SELECTOR);
}

function isMessageValid(todo) {
  return todo.title !== '';
}

function getTodo() {
  return {
    title: input.value,
  };
}
function renderTodoList(list) {
  const html = list.map(generateTodoHtml).join('');

  ul.innerHTML = html;
}

function renderTodo(todo) {
  const html = generateTodoHtml(todo);

  ul.insertAdjacentHTML('beforeend', html);
}

function generateTodoHtml(todo) {
  return `
  <li class="todoItem" data-id="${todo.id}">
    <span>${todo.title}</span>
    <button class="deleteBtn">Delete</button>
  </li>
  `;
}

function getTodoElId(todoEl) {
  return todoEl.dataset.id;
}

function clear() {
  form.reset();
}