import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'




const PokemonCard = (props) => {
  const novoPokemon ={
    name: "Pichu",
    type:"Eletric",
    evolved: false,
    weight:2,
    color:'blue',
    Image:'',
    id:0,
  }

   
    
  return (
    <Card color={props.color}>
        <img src={props.Image} alt={`Pokemon`}/>
        <PokemonName>{props.name}</PokemonName>
        <PokemonType>{props.type}</PokemonType>
        <p>{props.weight}kg</p>

        <EvolveButton onClick={props.evoluir}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard