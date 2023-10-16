const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactContainer = document.querySelector('#contactContainer');
const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';


form.addEventListener('submit', onAddContactBtnClick);
contactContainer.addEventListener('click', onContactContainerClick);


function onAddContactBtnClick (e) {
    const contacts = getContacts()

    e.preventDefault();

    if (isNaN(contacts.phone) || contacts.name === '' || contacts.surname === '' || contacts.phone === '') {
        alert('The data was entered incorrectly')
        return;
    }

    addNewContact(contacts);
    clearForm();
}

function onContactContainerClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const contactsEl = e.target.closest(CONTACT_ITEM_SELECTOR);

        contactsEl.remove();
    }
}

function clearForm() {
    form.reset();
}

function addNewContact(contacts) {
    const html = generateHTML(contacts);

    contactContainer.insertAdjacentHTML('beforeend', html);
}

function getContacts() {
    const contacts = {};

    for (let input of inputs) {
        contacts[input.name] = input.value;
    }

    return contacts;
}

function generateHTML(contacts) {
    return `
        <tr class="contactItem">
            <td>${contacts.name}</td>
            <td>${contacts.surname}</td>
            <td>${contacts.phone}</td>
            <td>
                <span>
                    <button class="deleteBtn" type="button">Delete</button>
                </span>
            </td>
        </tr>`;
    }
