import React from 'react'

export default function Card({pokemon}, {loding}){
    return(
        <>
        {
            loding ? <h1>Loading...</h1> :
            pokemon.map((item)=>{
                return(
                    <>
                    <div className='card'>
                        <img src={item.sprites.front_default}></img>
                        <h1>{item.name}</h1>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
