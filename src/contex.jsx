import {useState,useEffect, useContext} from "react"
import { createContext } from "react";
const Pokemon=createContext()
export function PokemonsContext(){
    const [pokemon,setPokemon]=useState([]);
    useEffect(()=>{
        fetch("./pokemon.json").then(resp=>resp.json()).then(pokemons=>setPokemon(pokemons)).catch(err=>console.error(err))
        
    },[])
    return(
        <Pokemon.Provider value={pokemon}>
            <Pokemons />
        </Pokemon.Provider>
    )
}
export function Pokemons(){
     const pokemon=useContext(Pokemon);
      
    
    return(<article className="pokemonsContainer">
        <a className="item-grid" href="/">back</a>
        {pokemon.map(pokemon =>{
            return(
                <div className="pokemons">   
                     <h3>{pokemon.id } {pokemon.name}</h3>           
                         <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt=""
              /> 
                    
                
               
                <h4>Type:</h4>{pokemon.type.map(type=>{
                    return(<h4>
                        {type}
                    </h4>)
                })}
                <table >
                <thead>
        <tr>
            <th>hp</th>
            <th>attack</th>
            <th>defense</th>
            <th>special attack</th>
            <th>special deffence</th>
            <th>speed</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{pokemon.hp}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.special_attack}</td>
            <td>{pokemon.special_defense}</td>
            <td>{pokemon.speed}</td>
        </tr>
    </tbody>
    </table>
                </div>
            )
        })}
    </article>)
}