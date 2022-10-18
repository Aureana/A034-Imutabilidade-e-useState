import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/240px-172Pichu.png',
    id: 0
  })

  // Para fazer seus próximos pokemons, crie novos estados!
  const evoluirPokemon = () => {
    const novoPokemon= {
      ...pokemon, 
      image :'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/240px-025Pikachu.png',
      name : "Pikachu",
      weight: 6,
      id: 25,
      envolved: true,
    }
    setPokemon(novoPokemon)
}

const [pokemon2, setPokemon2] = useState({
  name: "Charizard",
  type: "Fire",
  evolved: false,
  weight: 90.5,
  color: 'orange',
  image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/240px-006Charizard.png',
  id: 6
})
const evoluirPokemon2 = () => {
  const novoPokemon2= {
    ...pokemon2, 
    image :'https://archives.bulbagarden.net/media/upload/thumb/3/36/006Charizard-Mega_X.png/240px-006Charizard-Mega_X.png',
    name : "Mega Charizard X",
    weight: 110.5,
    id: 6,
    envolved: true,
  }
  setPokemon2(novoPokemon2)
}

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard
      color={pokemon.color}
      image={pokemon.image}
      name={pokemon.name}
      type={pokemon.type}
      weight={pokemon.weight}
      envolved={pokemon.evolved}
      id={pokemon.id}
      evoluir={evoluirPokemon}
           
/>
<PokemonCard
      color={pokemon2.color}
      image={pokemon2.image}
      name={pokemon2.name}
      type={pokemon2.type}
      weight={pokemon2.weight}
      envolved={pokemon2.evolved}
      id={pokemon2.id}
      evoluir={evoluirPokemon2}
           
/>
      

    </FlexContainer>
  </>
    
  );
}

export default App;
