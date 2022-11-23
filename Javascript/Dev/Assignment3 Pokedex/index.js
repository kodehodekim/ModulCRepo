// prettier-ignore

const container = document.getElementById("container")
const poke_num = 151;

const fetchApi = async () => {
  for (let i = 1; i <= poke_num; i++) {
    await getApi(i);
  }
};

const getApi = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createCard(pokemon);
};

const createCard = (pokemon) => {
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class="imgContainer">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">Number: ${id}</span>
    <h3 class="name">Name: ${name}</h3>
    <small class="type">Type: ${type}</small></div>`;
  pokemonElement.innerHTML = pokeInnerHTML;
  container.appendChild(pokemonElement);
};

fetchApi();
