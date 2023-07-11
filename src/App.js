import React, {useEffect, useState} from "react"
import {Routes, Route, Link} from "react-router-dom"
import Inicio from "./components/Inicio"
import Perfil from "./components/Perfil"
import PerfilAntecedentes from "./components/PerfilAntecedentes"
import Usuario from "./components/Usuario"

const App = () =>{
     return (
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Perfil" element={<Perfil />} />   
          <Route path="/PerfilAntecedentes" element={<PerfilAntecedentes />} />  
          <Route path="/Usuario" element={<Usuario />} />         
        </Routes>    
     )
}
export default App