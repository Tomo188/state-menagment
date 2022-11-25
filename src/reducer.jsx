import { useReducer } from "react"
export function Reducer({children}){
    const [count,dispatch]=useReducer((state,action)=>{
          switch(action.type){
            case "SET NAME":
                return {...state,name:action.payload}
            case "ADD COUNT":
                return {...state,count:action.payload}  
          }
    },{
        names:[],
        name:"",
        count:0
    })
    return(
        <article>
         <h2>Use Reducer</h2>  
         <h3>{count.count}</h3>      
         <input type="text" onChange={(e)=>dispatch({type:"SET NAME",payload:e.target.value})} />
         <h3>Name={children}+{count.name}</h3>
         <button onClick={()=>{
               const countNum=count.count+1;
               console.log(count,countNum)
               dispatch({type:"ADD COUNT",payload:countNum})
         }}>add count</button>  
        </article>
    )
}