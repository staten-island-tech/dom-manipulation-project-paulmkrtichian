

const DOMSelectors = {
    form: document.getElementById('userForm'),
    nameInput: document.getElementById('name'),
    emailInput: document.getElementById('email'),
    userDataList: document.getElementById('userData')
};

function createObject(name, email) {
    return { name, email };
}

function injectObject(obj) {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${obj.name}, Email: ${obj.email}`;
    DOMSelectors.userDataList.appendChild(listItem);
}

function clearFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.emailInput.value = '';
}

function removeObject(item) {
    item.parentNode.removeChild(item);
}

DOMSelectors.form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const email = DOMSelectors.emailInput.value;

    const userObject = createObject(name, email);
    injectObject(userObject);
    clearFields();
});

DOMSelectors.userDataList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
        removeObject(e.target);
    }
});