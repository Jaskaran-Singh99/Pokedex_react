import React, { useState, useEffect } from 'react';
import Pokemon from './components/pokemon';
import axios from 'axios';

function App() {
  // const [pokemon, setPokemon] = useState()
  // const data = axios.get('https://pokeapi.co/api/v2/pokemon/1').then(response=>
  //       // <img src={response.data}></img>
  //       setPokemon(response.data.sprites.front_shiny)
  //       )
      
    return(
      <>  
     <Pokemon></Pokemon>
      </>
    )
    }
export default App;
