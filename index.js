

const DOMSelectors = {
    form: document.getElementById('userForm'),
    nameInput: document.getElementById('name'),
    favoritecolorInput: document.getElementById('favoritecolor'),
    favoriteamimalInput: document.getElementById('favoriteanimal'),
    userDataList: document.getElementById('userData')
};

function createObject(name, favoritecolor, favoriteamimal) {
    return { name, favoritecolor, favoriteamimal};
}

function injectObject(obj) {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${obj.name}, Favorite Color: ${obj.favoritecolor}, Favorite Animal: ${obj.favoriteamimal}`;
    DOMSelectors.userDataList.appendChild(listItem);
}

function clearFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.favoritecolorInput.value = ''
    DOMSelectors.favoriteamimalInput.value;
}

function removeObject(item) {
    item.parentNode.removeChild(item);
}

DOMSelectors.form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const favoritecolor = DOMSelectors.favoritecolorInput.value;
    const favoriteamimal = DOMSelectors.favoriteamimalInput.value


    const userObject = createObject(name, favoritecolor, favoriteamimal);
    injectObject(userObject);
    clearFields();
});

DOMSelectors.userDataList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
        removeObject(e.target);
    }
});
/*
function backgroundAndText(background, text){
    background.style.backgroundColor = "red";
    text.innerHTML = "This is now a big red box";
}

backgroundAndText(DOMSelectors.favoritecolorInput, DOMSelectors.nameInput)
*/
function makeAlbum(){
    //return an object
}
function addCard(Album) {
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
}
)};

//afterbegin

/*<div class="gallery"></div>
<div class="card"></div class="card-title">Midnights</div><div>

</div> (HTML) */
