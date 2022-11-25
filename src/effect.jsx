import { useEffect,useState } from "react"
export function Effect(){
    const [name,setName]=useState([])
    useEffect(()=> {fetch("./names.json").then(resp=>resp.json()).then(resp=>
        setName(resp)).catch(error=>console.error(error))},[])
    const [infoName,setInfoName]=useState(" ");
    const [currentName,setCurrentName]=useState(" ")
    useEffect(()=>{
       currentName==""?setInfoName(""):fetch(`./${currentName}.json`).then(resp=>resp.json()).then(resp=>setInfoName(resp)).catch(error=>console.log(error))
    },[currentName])
    return (
        <article>
         <h2>{infoName[0]?.ime}</h2>
         <h3>{infoName[0]?.broj}</h3>
        {name.map(name=><button onClick={()=>{
            setCurrentName(name.ime)
        }}>{name.ime}</button>)}
        <button onClick={()=>setCurrentName("")}>reset</button>
        </article>
    )
}