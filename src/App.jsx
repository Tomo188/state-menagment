
import './App.css'
import {Route1} from "./Route"
import {RoutePokemon} from "./Route2"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 
  

  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Route1 />}>
      
    </Route>
    <Route path="/pokemons" element={<RoutePokemon />}>
    </Route>
    </Routes> 
  </BrowserRouter>
  
  
  
  )
}

export default App
