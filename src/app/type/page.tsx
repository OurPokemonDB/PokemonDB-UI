'use client'
import TypeIcon from '@/components/Type/Icon'
import { useEffect, useState } from "react";

const TypePage = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/')
            .then(resp => resp.json())
            .then(data => {
                const res = data.results.map((d: any, i:number) => d.name);
                setTypes(res.slice(0, 18));
            });
    }, []);

    return (
        <div>
            <h1 className='text-center'>Types</h1>
            <div className='py-6'>
                <p>
                    All Pokémon creatures and their moves are assigned certain types. Each type has
                    several strengths and weaknesses in both attack and defense. In battle, you
                    should use Pokémon and moves that have a type advantage over your opponent;
                    doing so will cause much more damage than normal. A single-type advantage (for
                    instance a Water attack against a Ground-type Pokémon) will net you double
                    normal damage. The advantages also stack up, so a double-type advantage (for
                    instance a Water attack against a Ground/Rock-type Pokémon) will net you
                    quadruple damage. In both these cases you will see the message. It&rsquo; super
                    effective! in-game after the attack. Conversely, a single- and double-type
                    disadvantage will afflict half and a quarter normal damage respectively. Here
                    you will see the message. It&rsquo; not very effective... in-game. Another
                    advantage you can gain is Same Type Attack Bonus (STAB). As the name implies,
                    this increases the power of the move if the attacking Pokémon has the same type
                    as the move used (for example a Fire-type Pokémon using a Fire-type move). In
                    this case the damage is 1.5 times normal. Again this is added to any other
                    advantages, so a Water-type Pokémon using a Water-type move against a
                    Ground/Rock-type Pokémon will bag you six times (2×2×1.5) normal damage!
                </p>
            </div>
            <div className='flex gap-2'>
                {
                    types.map((name: string) =>
                        <TypeIcon name={name} key={name} />
                    )
                }
            </div>
        </div>
    )
}

export default TypePage
