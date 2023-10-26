const DOMSelectors = {
    form: document.getElementById('userForm'),
    nameInput: document.getElementById('name'),
    favoritecolorInput: document.getElementById('favoritecolor'),
    favoritemusicInput: document.getElementById('favoritemusic'),
    userDataList: document.getElementById('userData')
};

function createObject(name, favoritecolor, favoritemusic) {
    return { name, favoritecolor, favoritemusic};
}

function injectObject(obj) {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${obj.name}, Favorite Color: ${obj.favoritecolor}, Favorite SONG: ${obj.favoritemusic}`;
    DOMSelectors.userDataList.innerHTML(listItem);
}

function clearFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.favoritecolorInput.value = ''
    DOMSelectors.favoritemusicInput.value = '';
}

function removeObject(item) {
    item.parentNode.removeChild(item);
}

DOMSelectors.form.addEventListener('submit', function(haha) {
    haha.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const favoritecolor = DOMSelectors.favoritecolorInput.value;
    const favoritemusic = DOMSelectors.favoritemusicInput.value;


    const userObject = createObject(name, favoritecolor, favoritemusic);
    injectObject(userObject);
    clearFields();
});

DOMSelectors.userDataList.addEventListener('click', function(haha) {
    if (haha.target && e.target.nodeName == 'LI') {
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
/* function makeAlbum(){
    //return an object
}
/*function addCard(Album) {
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
}
)};
*/
//afterbegin

/*<div class="gallery"></div>
<div class="card"></div class="card-title">Midnights</div><div>

</div> (HTML) */
