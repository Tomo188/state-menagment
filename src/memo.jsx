import { useState,useMemo } from "react";
 export function Memo(){
    const [count,setCount]=useState([])
    const [num,setNum]=useState([])
    const total=useMemo(()=>count.reduce((acc,num)=>acc+num,0)
    ,[count])
    
    return (
        <article>
            <h2>Use memo</h2> 
            <input type="text" value={num} onChange={(e)=>setNum((previous)=>[e.target.value])} />
            <h3>total:{total}</h3>
            <button onClick={()=>{
                setCount((previous)=>{
                    return[...previous,Number(...num)]
                });
                setNum([]);
            }}>Calculate</button>
        </article>
    )
 }