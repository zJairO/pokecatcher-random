let id;


function updatePokemon() {

    randomPokemon();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(url)
    .then (response => response.json())
    .then (data => {   
    

    let pkmName = capitalize(data.name);
    document.getElementById('pokemonMsg').innerHTML = `
    <h1 style="color: yellow;">Atrapaste: </h1>

    `
    document.getElementById('pokemonSprite').src = data.sprites.front_default;
    document.getElementById('pokemonQuantity').innerHTML = `
    <h1 style="color: #020aa9;">1X</h1>

    `
    document.getElementById('pokemonName').innerHTML = `
    <h1 style="color: white;">${pkmName}</h1>
    `

    console.log(pkmName);
    
})
}

function randomPokemon(){
    id = Math.round(Math.random() * 150) + 1;
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }