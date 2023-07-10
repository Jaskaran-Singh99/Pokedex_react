
// import React from 'react'
// import Card from './card'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const Pokemon = ()=> {

//     const [posts, setPosts] = useState([])
//     const [loding, setLoading] = useState(true)
//     const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
//     const [prev, setPrev] = useState()
//     const [next, setNext] = useState()
    

//     const getAllPokemon = async()=>{  
//         setLoading(true)
//         const res = await axios.get(url)
//         // const arrRes = res.data.results
        
//         // console.log(arrRes)
//         setNext(res.data.next)
//         setPrev(res.data.previous)
//         getPokemon(res.data.results)
//         // getPokemon(res.data.results)
       
//         setLoading(false)
//         // console.log(posts)s
//     }
//     const getPokemon = async(res)=>{
//         // const res = await axios.get(url)
//         // const arrRes = res.data.results

//         res.filter(async (item)=>{
//             const results = await axios.get(item.url)

//             setPosts(state=>{
                
//                 state=  [...state, results.data]
//                 // console.log(state)
//                 // console.log(...state)
//                 state.sort((a,b)=>a.id>b.id?1:-1)

              
//                 return state

//             })
//             // setPosts(Object.assign(item))
          
//         })
       
//     }
//     useEffect(() => {      
//         getAllPokemon();
        
//     }, [url])

//     return (
//         // <>
//         // <Card pokemon={posts} loding={loding}/>
//         // </>
//         <>
    
    
//             <div className="container">
//                 <div className="left-content">
//                     <Card pokemon={posts} loading={loding} />
                    
//                     {/* <div className="btn-group">
//                         {  prevUrl && <button onClick={()=>{
//                             setPokeData([])
//                            setUrl(prevUrl) 
//                         }}>Previous</button>}

//                         { nextUrl && <button onClick={()=>{
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div> */}
//                 </div>
//                 {/* <div className="right-content">
//                    <Pokeinfo data={pokeDex}/>
//                 </div> */}
//             </div>
//         </>
//     )
// }

// export default Pokemon;

import React from "react";
import Card from "./card";
import Pokeinfo from "../pokeInfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}
export default Main;
