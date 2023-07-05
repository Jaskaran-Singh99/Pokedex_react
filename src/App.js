import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const pokemonApi = 'https://pokeapi.co/api/v2/pokemon'
  let [posts, setPosts] = useState([])

  useEffect( ()=>{
    
     axios.get(pokemonApi).then(
      (response)=>{
          setPosts(response.data.results)
          console.log(response.data.results)
    
      }
    )},[])

    return(
      <>
        {posts.map((post)=>{
          return <h2 key={post.url}>{post.name}</h2>
      })} 
       
      </>
    )
}
export default App;
