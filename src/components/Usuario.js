import React, {useEffect, useState} from "react"

const Usuario = () =>{
    const [nameUser,setNameUser] = useState("")
    const [terminoContr,setTerminoContr] = useState(false)
    const handleUser = (evento) =>{
        //Dónde está en el evento lo que viene escrito por el usuario desde el input de texto? -> evento.target.value
        setNameUser(evento.target.value)
    }

    const handleTerminos = () =>{
        setTerminoContr(!terminoContr)   //el signo de exclamación niega la variable, ya estaba en verdadero, asi que cambia a falso
    }

    return (
      <>

        <h1>Usuario</h1>
        <label>Indica un nombre de usuario</label><br/>
        <input type="text" name="usuario" placeholder="Ejemplo: Santiago" onChange={handleUser}></input><br/><br/>
        {
            nameUser == "nombreError" &&           //es como un if
            <p>Ya existe ese usuario</p>
        }<br/>
        <input type="checkbox" name="terminos" checked={terminoContr} onChange={handleTerminos}></input>
        <label htmlFor="terminos">Acepto los Términos de contrato</label><br/><br/>
        <button type="button">Guardar nombre de usuario</button>

      </>
    )
}
export default Usuario