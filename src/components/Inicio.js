import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"

const Inicio = () =>{
     return (
       <>

       <h1>Inicio</h1>
       <p>Bienvenidos</p><br/>
       <div>
         <a href="/Perfil">Ir a perfil</a><br/>
         <Link to="/Perfil">Ir a perfil</Link>
       </div>

       </>
     )
}
export default Inicio