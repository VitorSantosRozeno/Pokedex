// Função para buscar todos os Pokémons e exibir na tela
async function fetchPokemonData() {
    const totalPokemons = 150;  // Número de Pokémons a serem carregados (pode aumentar se quiser carregar mais)
    const pokedexContainer = document.getElementById('pokedex');
    
    for (let i = 1; i <= totalPokemons; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
  
      // Criação do card para cada Pokémon
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon-card');
      
      const pokemonImage = data.sprites.front_default;  // Imagem do Pokémon
      const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);  // Nome do Pokémon (com a primeira letra maiúscula)
      const pokemonTypes = data.types.map(type => type.type.name).join(', ');  // Tipos do Pokémon (Ex: Fogo, Água)
  
      // Criando a estrutura do card
      pokemonCard.innerHTML = `
        <div class="front">
          <img src="${pokemonImage}" alt="${pokemonName}">
          <h3>${pokemonName}</h3>
          <p>#${data.id}</p>
        </div>
        <div class="back">
          <p class="type">Tipo(s): ${pokemonTypes}</p>
        </div>
      `;
  
      // Adiciona o card à Pokédex
      pokedexContainer.appendChild(pokemonCard);
    }
  }
  
  // Chama a função para carregar os Pokémons
  fetchPokemonData();
  
