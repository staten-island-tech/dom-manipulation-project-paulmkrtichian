const DOMSelectors = {
    nameInput: document.getElementById('name'),
    singerInput: document.getElementById('singer'),
    imageInput: document.getElementById('image'),
    submitButton: document.getElementById('submit'),
    clearButton: document.getElementById('clear'),
    HtmlCard: document.querySelector('.HtmlCard'),
    
};
function createhtmlcard(name, singer, imageUrl) {
    const HtmlCard = document.createElement('div');
    HtmlCard.classList.add('html-card');

    const image = document.createElement('img');
    image.src = imageUrl;

    const Htmlcontent = document.createElement('div');
    Htmlcontent.classList.add('html-card-content');

    const nameinfo = `<p>Name: ${name}</p>`;
    const singerinfo = `<p>Favorite Color: ${singer}`;
    
    Htmlcontent.insertAdjacentHTML('beforeend', nameinfo);
    Htmlcontent.insertAdjacentHTML('beforeend', singerinfo);

    const removebutton = document.createElement('button');
    removebutton.classList.add('remove');
    removebutton.textContent = 'Remove Singer';
    removebutton.addEventListener('click', () => {
        HtmlCard.remove();
    })

    HtmlCard.appendChild(image);
    HtmlCard.appendChild(Htmlcontent);
    HtmlCard.appendChild(removebutton);

    DOMSelectors.HtmlCard.appendChild(HtmlCard);
}



function clearInputFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.singerInput.value = ''
    DOMSelectors.imageInput.value = '';
}

DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = DOMSelectors.nameInput.value;
    const singer = DOMSelectors.singerInput.value;
    const imageUrl = DOMSelectors.imageInput.value;


    if (name && singer && imageUrl) {
        createhtmlcard(name, singer, imageUrl);
       clearInputFields();
    }
   
});

DOMSelectors.clearButton.addEventListener('click', () => {
    clearInputFields();
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
