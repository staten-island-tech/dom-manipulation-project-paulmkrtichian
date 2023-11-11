const DOMSelectors = {
    pokemonInput: document.getElementById('pokemon'),
    CPInput: document.getElementById('CP'),
    imageInput: document.getElementById('image'),
    submitButton: document.getElementById('submit'),
    PokemonCard: document.querySelector('.PokemonCard'),
    
};

DOMSelectors.submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const pokemon = DOMSelectors.pokemonInput.value;
    const CP = DOMSelectors.CPInput.value;
    const urlimage = DOMSelectors.imageInput.value;
    
    createhtmlcard(pokemon, CP, urlimage);
    clearInputFields();
});



function createhtmlcard(pokemon, CP, urlimage) {
    const PokemonCard = document.createElement('div');
    const image = document.createElement('img');
    image.src = urlimage;
    const poke = document.createElement('div');
    const pokemoninfo = `<p>Name: ${pokemon}</p>`;
    const CPinfo = `<p>CP: ${CP}`;
    poke.insertAdjacentHTML('beforeend', pokemoninfo);
    poke.insertAdjacentHTML('beforeend', CPinfo);
    const removebutton = document.createElement('button');
    removebutton.textContent = 'Remove';
    removebutton.addEventListener('click', () => {
        PokemonCard.remove();
    })
    PokemonCard.append(image);
    PokemonCard.append(poke);
    PokemonCard.append(removebutton);
    DOMSelectors.PokemonCard.append(PokemonCard);
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