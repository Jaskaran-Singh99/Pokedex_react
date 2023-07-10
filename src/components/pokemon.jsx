import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import Card from './card'

export default function Pokemon() {

    const [posts, setPosts] = useState([])
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [prev, setPrev] = useState()
    const [next, setNext] = useState()
    const [loding, setLoading] = useState(true)

    const getAllPokemon = async()=>{
        setLoading(true)
        const res = await axios.get(url)
        // const arrRes = res.data.results
        
        // console.log(arrRes)
        setPrev(res.data.previous)
        getPokemon(res.data.results)
        // getPokemon(res.data.results)
        setNext(res.data.next)
        setLoading(false)
    }
    const getPokemon = async(res)=>{
        // const res = await axios.get(url)
        // const arrRes = res.data.results

        res.map(async (item)=>{
            const results = await axios.get(item.url)

            setPosts(state=>{
                return [...state, results.data]

            })
          
        })
       
    }
    useEffect(() => {      
        getAllPokemon();
        
    }, [url])

    return (
        <>
        <Card pokemon={posts} loding={loding}/>
        </>
    )
}


