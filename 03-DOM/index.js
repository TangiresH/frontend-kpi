const btn = document.querySelector('#btn');
const ul = document.querySelector('#todoList');
const input = document.querySelector('#inputComment');


btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    if (input.value) {
        const li = document.createElement('li');

        li.textContent = input.value;
        ul.append(li);
        input.value = '';
    } else {
        alert(`Поле не має бути порожнім. Тобі слід заповнити його.`)
    }
}