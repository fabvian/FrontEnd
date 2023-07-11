import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


const Perfil = () =>{

     // contador de Likes
     const [contadorLikes,setContadorLikes] = useState(0)
     //const [nombre,setNombre] = useState("")         <-- Más opciones
     //const [activo,setActivo] = useState(false)
     //como se lee un estado -> console.log(contadorLikes)
     //como se cambia el valor de un estado -> setContadorLikes(12)
     const handleContador = () => {
      setContadorLikes(contadorLikes+1)
     }

     return (
       <>
       <h1>Perfil</h1>
       <p>Hasta pronto</p>
       <Link to="/Inicio">Ir al inicio</Link><br/>
       <button type="button" onClick={handleContador}>Dar Like</button><br/>
       <p>Conteo de Likes: {contadorLikes}</p>
       </>
     )
}
export default Perfil