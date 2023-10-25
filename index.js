



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
    listItem.textContent = `Name: ${obj.name}, Favorite Color: ${obj.favoritecolor}`;
    
    // Add a function to convert the link to an image
    const favoritemusicImg = convertLinkToImage(obj.favoritemusic);
    listItem.appendChild(favoritemusicImg);
    
    DOMSelectors.userDataList.appendChild(listItem);
}

function clearFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.favoritecolorInput.value = ''
    DOMSelectors.favoritemusicInput.value = '';
}

function removeObject(item) {
    item.parentNode.removeChild(item);
}

function convertLinkToImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Favorite Song Image';
    img.style.minWidth = '1000px'; // Set a maximum width for the image if needed
    
    return img;
}

DOMSelectors.form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = DOMSelectors.nameInput.value;
    const favoritecolor = DOMSelectors.favoritecolorInput.value;
    const favoritemusic = DOMSelectors.favoritemusicInput.value;

    const userObject = createObject(name, favoritecolor, favoritemusic);
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
