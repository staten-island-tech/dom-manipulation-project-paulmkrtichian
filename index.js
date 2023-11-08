const DOMSelectors = {
    pokemonInput: document.getElementById('pokemon'),
    CPInput: document.getElementById('CP'),
    imageInput: document.getElementById('image'),
    submitButton: document.getElementById('submit'),
    clearButton: document.getElementById('clear'),
    PokemonCard: document.querySelector('.PokemonCard'),
    
};

DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const pokemon = DOMSelectors.pokemonInput.value;
    const CP = DOMSelectors.CPInput.value;
    const urlimage = DOMSelectors.imageInput.value;


    if (pokemon && CP && urlimage) {
        createhtmlcard(pokemon, CP, urlimage);
       clearInputFields();
    }
   
});

DOMSelectors.clearButton.addEventListener('click', () => {
    clearInputFields();
});


function createhtmlcard(pokemon, CP, urlimage) {
    const PokemonCard = document.createElement('div');
    PokemonCard.classList.add('html-card');

    const image = document.createElement('img');
    image.src = urlimage;

    const poke = document.createElement('div');
    poke.classList.add('html-card-content');

    const pokemoninfo = `<p>Name: ${pokemon}</p>`;
    const CPinfo = `<p>CP: ${CP}`;
    
    poke.insertAdjacentHTML('beforeend', pokemoninfo);
    poke.insertAdjacentHTML('beforeend', CPinfo);

    const removebutton = document.createElement('button');
    removebutton.classList.add('remove');
    removebutton.textContent = 'Remove Pokemon';
    removebutton.addEventListener('click', () => {
        PokemonCard.remove();
    })

    PokemonCard.appendChild(image);
    PokemonCard.appendChild(poke);
    PokemonCard.appendChild(removebutton);

    DOMSelectors.PokemonCard.appendChild(PokemonCard);
}



function clearInputFields() {
    DOMSelectors.pokemonInput.value = '';
    DOMSelectors.CPInput.value = ''
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