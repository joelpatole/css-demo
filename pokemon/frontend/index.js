import { fetch } from "../backend/backend.js";

const getPokemon = async () => {
    const response = await fetch("example.com");
    const data = await response.json();
    return data;
}


const removeSelectedPokemon = (pokemon) => {
    selectedPokemonList.removeChild(pokemon);
    allPokemonList.appendChild(pokemon);
    pokemon.addEventListener("click", () => {
        selectPokemon(pokemon)
    });
}

const selectPokemon = (pokemon) => {
    allPokemonList.removeChild(pokemon);
    selectedPokemonList.appendChild(pokemon);
    pokemon.addEventListener("click", () => {
        removeSelectedPokemon(pokemon)
    })
}

const generatePokemonCard = (pokemon) => {    
    const container = document.createElement("div");
    container.setAttribute("class", "pokemon flex");
    container.innerHTML = `<span class="pokemon-name"><p>${pokemon.name}</p></span>`;  
    
    container.addEventListener("click", () => {
        selectPokemon(container);
    });
    allPokemonList.appendChild(container);
}

const populatePokemon = async () => {
    const pokemons = await getPokemon();
    
    for(let pokemon of pokemons){
        generatePokemonCard(pokemon);
    }
}

const allPokemonList = document.getElementById("all-pokemon-list");
const selectedPokemonList = document.getElementById("selected-pokemon-list");

populatePokemon();
