const DOMSelectors = {
    nameInput: document.getElementById('name'),
    favoritecolorInput: document.getElementById('favoritecolor'),
    favoritemusicInput: document.getElementById('favoritemusic'),
    submitButton: document.getElementById('submit'),
    clearButton: document.getElementById('clear'),
    htmlcards: document.querySelector('.htmlcards'),
    
};

DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = DOMSelectors.nameInput.value;
    const favoritecolor = DOMSelectors.favoritecolorInput.value;
    const favoritemusicurl = DOMSelectors.favoritemusicInput.value;


    if (name && favoritecolor && favoritemusicurl) {
        createhtmlcard(name, favoritecolor, favoritemusicurl);
       clearFields();
    }
   
});

DOMSelectors.clearButton.addEventListener('click', () => {
    clearInputFields();
});


function createhtmlcard(name, favoritecolor, favoritemusicurl) {
    const htmlcard = document.createElement('div');
    htmlcard.classicList.add('htmlcard');

    const favoritemusic = document.createElement('img');
    favoritemusic.src = favoritemusicurl;

    const htmlcontent = documnet.createElement('div');
    htmlcontent.classicList.add('htmlcard-content');

    const nameinfo = `<p>Name: ${name}</p>`
    const favoritecolorinfo = `<p>Favorite Color: ${favoritecolor}`;
    
    htmlcontent.insertAdjacentHTML('beforeend', `<button class=remove> Remove SInger</button> ${nameinfo}`);
    htmlcontent.insertAdjacentHTML('beforend', favoritecolorinfo);

    const removebutton = document.createElement('button');
    removebutton.classList.add('remove');
    removebutton.textContent = 'Remove Singer';
    removebutton.addEventListener('click', () => {
        htmlcard.remove();
    })

    htmlcard.appendChild(favoritemusic);
    htmlcard.appendChild(htmlcontent);
    htmlcard.appendChild(removebutton);

    DOMSelectors.htmlcards.appendChild(htmlcard);
}



function clearInputFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.favoritecolorInput.value = ''
    DOMSelectors.favoritemusicInput.value = '';
}





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
