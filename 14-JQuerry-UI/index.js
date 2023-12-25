'use strict';

const $contactContainer = $('#contactContainer')
    .on('click', '.editBtn', onEditBtnClick)
    .on('click', '.deleteBtn', onDeleteBtnClick);
const $createContactBtn = $('#createContactBtn')
    .on('click', onCreateBtnClick);
const $inputs = $('input');
let contactList = [];

const dialog = $("#dialogForm").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
        Save: () => {
            const contact = getFormData();

            if (!isContactValid(contact)) {
                alert('Error contact data');
                return;
            }

            saveContact(contact);
        },
        Cancel: function() {
            closeDialog();
        }
    },
    close: function() {
        closeDialog();
    }
});
const form = dialog.find("form")[0];

ContactApi
    .getList()
    .then((list) => {
        rendContactList(list);
        contactList = list;
    })

function onCreateBtnClick(e) {
    openDialog();
}

function saveContact(contact) {
    if(contact.id) {
        ContactApi
            .update(contact.id, contact)
            .then(() => {
                contactList = contactList.map(contactItem => {
                    return contactItem.id === contact.id ? contact : contactItem;
                })
                replaceContact(contact.id, contact);
                closeDialog();
            })
    } else {
        ContactApi
            .create(contact)
            .then((contactWithId) => {
                rendContact(contactWithId);
                contactList.push(contactWithId);
                closeDialog();
            })
    }


    console.log('onContactFormSubmit', contact);
}

function onDeleteBtnClick(e) {
    const id = getIdContactEl(e.target);

    if (id) {
        ContactApi
            .delete(id)
            .then(() => {
                contactList = contactList.map(contact => contact.id !== id);
                removeContactElById(id);
            })
    }
}

function onEditBtnClick(e) {
    const id = getIdContactEl(e.target);
    const contact = contactList.find(contact => contact.id === id);

    if(contact) {
        openDialog(contact);
    }
}

function removeContactElById(id) {
    const $contactElement = getContactElById(id);

    $contactElement?.remove();
}

function getFormData() {
    const contact = {};

    for(const input of $inputs) {
        contact[input.name] = input.value;
    }

    return contact;
}

function setFormData(contact) {
    for (const input of $inputs) {
        const inputName = input.name;

        if(inputName in contact) {
            input.value = contact[inputName];
        }
    }
}

function isContactValid(contact) {
    return (contact.firstName !== ''
        && contact.lastName !== ''
        && contact.phone !== ''
        && !isNaN(contact.phone));
}

function rendContact(contact) {
    const  htmlStr = generateContactHtml(contact);

    $contactContainer.append(htmlStr);
}

function rendContactList(contacts) {
    const htmlStr = contacts.map(contact => generateContactHtml(contact)).join('');

    $contactContainer.html(htmlStr);
}

function replaceContact(id, contact) {
    const $oldContactElement = getContactElById(id);
    const newContactHtml = generateContactHtml(contact);

    $oldContactElement.replaceWith(newContactHtml);
}

function getContactElById(id) {
    return $contactContainer.find(`[data-id="${id}"]`);
}

function getIdContactEl(element) {
    return element.closest('.contactItem').dataset.id;
}

function openDialog(contact) {
    if (contact) {
        setFormData(contact);
    }

    dialog.dialog('open');
}

function closeDialog() {
    dialog.dialog('close');
    resetForm();
}

function resetForm() {
    $inputs.val('');
}

function generateContactHtml(contact) {
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
