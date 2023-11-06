const DOMSelectors = {
    nameInput: document.getElementById('name'),
    modelInput: document.getElementById('model'),
    imageInput: document.getElementById('image'),
    submitButton: document.getElementById('submit'),
    clearButton: document.getElementById('clear'),
    htmlCards: document.querySelector('.html-cards'),
    
};

DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = DOMSelectors.nameInput.value;
    const model = DOMSelectors.modelInput.value;
    const imageUrl = DOMSelectors.imageInput.value;


    if (name && model && imageUrl) {
        createhtmlcard(name, model, imageUrl);
       clearInputFields();
    }
   
});

DOMSelectors.clearButton.addEventListener('click', () => {
    clearInputFields();
});


function createhtmlcard(name, model, imageUrl) {
    const htmlCard = document.createElement('div');
    htmlCard.classList.add('html-card');

    const image = document.createElement('img');
    image.src = imageUrl;

    const htmlcontent = document.createElement('div');
    htmlcontent.classList.add('html-card-content');

    const nameinfo = `<p>Name: ${name}</p>`;
    const modelinfo = `<p>Favorite Color: ${model}`;
    
    htmlcontent.insertAdjacentHTML('beforeend', nameinfo);
    htmlcontent.insertAdjacentHTML('beforeend', modelinfo);

    const removebutton = document.createElement('button');
    removebutton.classList.add('remove');
    removebutton.textContent = 'Remove Singer';
    removebutton.addEventListener('click', () => {
        htmlCard.remove();
    })

    htmlCard.appendChild(image);
    htmlCard.appendChild(htmlcontent);
    htmlCard.appendChild(removebutton);

    DOMSelectors.htmlCards.appendChild(htmlCard);
}



function clearInputFields() {
    DOMSelectors.nameInput.value = '';
    DOMSelectors.modelInput.value = ''
    DOMSelectors.imageInput.value = '';
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
