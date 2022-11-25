import { useState } from 'react'
import './App.css'
import { Reducer } from './reducer'
import {Memo}from './memo'
import {Effect} from "./effect"
import {Ref} from "./useref"
export function Route1() {
  const [count,setCount]=useState(0);
  

  return (
            <div>   
    <h1 className='header'>React state menagment</h1>
    <div className="main">
       <ol>
      <li>use state</li>
      <li>use reducer</li>
      <li>use memo</li>
      <li>use effect</li>
      <li>context</li>
    </ol>
    <article>
        <h2>Use State</h2>
    <button onClick={()=>{setCount((previousState)=>{
      previousState++;
      return previousState;
    })}}>{count}</button>
    </article>
    <Reducer>Tomo</Reducer>
    < Memo />
    <Effect />
    <Ref />
    <article>
        <a href="/pokemons">Pokemons</a>
    </article>
    <footer>
      <h1>React State Menagment</h1>
    </footer>
    </div>
    </div>
  
  
  )
}