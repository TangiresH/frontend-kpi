const form = document.querySelector('#userForm');
const nameInput = document.querySelector('#nameInput');
const userInfoBox = document.querySelector('#userInfoBox');
const userTemplate = document.querySelector('#userTemplate').innerHTML;
const USER_API = "https://api.github.com/users/{{login}}";


form.addEventListener('submit', onFormSubmit);


function onFormSubmit (e) {
    e.preventDefault();

    let name = nameInput.value;

    getInfo(name)
        .then(user => {
            renderUser(user);
            resetForm();
        })
        .catch((e) => {
            alert(e);
        })
}

function getInfo(name) {
    return fetch(USER_API.replace('{{login}}', name)).then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Can not fetch user info');
    });
}

function resetForm () {
    form.reset();
}

function renderUser(user) {
    let html = generateHTML(user)

    userInfoBox.innerHTML = html;
}

function generateHTML(user) {
    return userTemplate
        .replace('{{avatar_url}}', user.avatar_url)
        .replace('{{public_repos}}', user.public_repos)
        .replace('{{followers}}', user.followers)
        .replace('{{following}}', user.following)
}