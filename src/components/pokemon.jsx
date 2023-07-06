import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'

export default function Pokemon() {
    // const pokemonApi = 'https://pokeapi.co/api/v2/pokemon'

    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState(['https://pokeapi.co/api/v2/pokemon'])
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()
    const [loding, setLoading] = useState(true)

    const getAllPokemon = async()=>{
        setLoading(true)
        const res = await axios.get(url)
        const arrRes = res.data.results
        console.log(arrRes)
        setPrev(res.data.previous)
        setNext(res.data.next)
        setLoading(false)

        // .then(
        //     (response) => {
        //         setPosts(response.data.results)
        //     }
        // console.log(res)
            const getPokemon = async()=>{
            arrRes.map((item)=>{
            console.log(item.url)
        })}
    getPokemon()
    }
   
    

    useEffect(() => {      
        getAllPokemon();
    
        
    }, [url])

    return (
        <>
            {/* {posts.map((post) => {
                

                axios.get(post.url).then(response =>
                    setInfo(response.data.name)
                ).catch(err => {
                    console.log(err)
                })
               
                return (
                console.log(info)
                )
                
            } )  } */}
        </>
    )
}


