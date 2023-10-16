

const DOMSelectors = {
    form: document.getElementById('userForm'),
    nameInput: document.getElementById('name'),
    favoritecolorInput: document.getElementById('favoritecolor'),
    userDataList: document.getElementById('userData')
};

function createObject(name, favoritecolor) {
    return { name, favoritecolor };
}

function injectObject(obj) {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${obj.name}, Favorite Color: ${obj.favoritecolor}`;
    DOMSelectors.userDataList.appendChild(listItem);
}

function clearFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.favoritecolorInput.value = '';
}

function removeObject(item) {
    item.parentNode.removeChild(item);
}

DOMSelectors.form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const favoritecolor = DOMSelectors.favoritecolorInput.value;

    const userObject = createObject(name, favoritecolor);
    injectObject(userObject);
    clearFields();
});

DOMSelectors.userDataList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
        removeObject(e.target);
    }
});

function backgroundAndText(background, text){
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
}

backgroundAndText(DOMSelectors.favoritecolorInput, DOMSelectors.nameInput)