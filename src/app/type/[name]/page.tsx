'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface eProps {
    params: { name: string }
}

const Specificity = ({ params }: eProps) => {
    const { name } = params;
    const [poke, setPoke] = useState([]);

    /**
     * pokemon have form like 
     * {
     *      name: "squirtle",
     *      url : "linkApi"
     * }
     */

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/' + name)
            .then(resp => {
                const infor = resp.data.pokemon;
                setPoke(infor)
            });
    }, [name])

    return (
        <div>
            <h1 className='text-center'>{name} type</h1>
            <div className='grid grid-cols-4 gap-5 py-6'>
                {
                    poke.map((p: any, i) => 
                    <h5 key={i}>
                        <i>{p.pokemon.name}</i>
                    </h5>)
                }
            </div>
        </div>
    )
}

export default Specificity