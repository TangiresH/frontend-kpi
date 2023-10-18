'use strict';

const form = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactContainer = document.querySelector('#contactContainer');
let contactList = [];
const EDIT_BTN = 'editBtn';
const DELETE_BTN = 'deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';


form.addEventListener('submit', onAddContactBtnClick);
contactContainer.addEventListener('click', onContactContainerClick);


init();

function init() {
  ContactApi.getList()
      .then((list) => {
        contactList = list;
        renderContactList(list);
      })
      .catch(showError);
}

function onAddContactBtnClick(e) {
  const contact = getContact();

  e.preventDefault();
  if (!isContactValid(contact)) {
    showError(new Error('Wrong input data'));
    return;
  }
  console.log(contact);

  saveContact(contact);
  clearForm();
}

function onContactContainerClick(e) {
  const contactEl = e.target.closest(CONTACT_ITEM_SELECTOR);
  const id = contactEl.dataset.id;
  const contact = findContactById(id);

  if (contact) {
    if (e.target.classList.contains(DELETE_BTN)) {
      contactEl.remove();
    } else if (e.target.classList.contains(EDIT_BTN)) {
      setFormData(contact);
    }
  }
}

function setFormData(contact) {
  for (const input of inputs) {
    if (Object.hasOwn(contact, input.name)) {
      input.value = contact[input.name];
    }
  }
}

function getContact() {
  const contact = {};

  for (const {name, value} of inputs) {
    contact[name] = value;
  }

  return contact;
}

function isContactValid(contact) {
  return !isEmpty(contact.firstName) &&
      !isEmpty(contact.lastName) &&
      !isEmpty(contact.phone) &&
      isPhone(contact.phone);
}

function isPhone(phone) {
  return !isNaN(phone);
}

function isEmpty(str) {
  return str === '';
}

function saveContact(contact) {
  if (contact.id) {
    ContactApi.update(contact.id, contact)
        .then((newContact) => {
          updateKeys(contact.id, newContact);
          clearForm();
        })
        .catch(showError);

    replaceContact(contact.id, contact);
  } else {
    ContactApi.create(contact)
        .then((newContact) => {
          contactList.push(newContact);
          renderContact(newContact);
          clearForm();
        })
        .catch(showError);
  }
}

function renderContact(contact) {
  const html = generateHTML(contact);

  contactContainer.insertAdjacentHTML('beforeend', html);
}

function renderContactList(contacts) {
  const html = contacts.map(generateHTML).join('');

  contactContainer.innerHTML = html;
}

function generateHTML(contact) {
  return `
    <tr class="contactItem" data-id="${contact.id}">
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
        <span>
            <button type="button" class="editBtn">[Edit]</button>
            <button type="button" class="deleteBtn">[Delete]</button>
        </span>
      </td>
    </tr>
  `;
}

function showError(error) {
  alert(error.message);
}

function clearForm() {
  form.reset();
}

function findContactById(id) {
  return contactList.find((item) => item.id === id);
}

function updateKeys(id, changes) {
  const oldContact = findContactById(id);

  Object.keys(changes).forEach((key) => oldContact[key] = changes[key]);
}

function replaceContact(id, contact) {
  const oldTodoEl = document.querySelector(`[data-id="${id}"]`);
  const html = generateHTML(contact);

  oldTodoEl.outerHTML = html;
}
