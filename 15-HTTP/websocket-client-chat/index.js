const ws = new WebSocket('ws://localhost:8080');
const form = document.querySelector('#formWs');
const container = document.querySelector('#container');


form.addEventListener('submit', onFormSubmit);


function onFormSubmit (e) {
    e.preventDefault();

    const message = {
        name: form.name.value,
        text: form.text.value,
    };

    ws.send(JSON.stringify(message));
}

    ws.onopen = () => {
        console.log('Connection with server was established');
    }

    ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    renderMessage(data);
    }

    function renderMessage(data) {
    const html = `<li>${data.name}: ${data.text}</li>`;

    container.insertAdjacentHTML("beforeend", html);
    }

