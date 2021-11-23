import React from "react";
import Leon from "../../estilos/leon.png"
import "../../estilos/estiloRepresentante.css"

function HomeJugador(props){
console.log(props.location.state)
return(
  <div className='row'>
    <div >
        <h1 className="textoInicio centrar col-12 bordeLetra "><b>¡Bienvenido! </b></h1>
        <img className="centrarImagen " height='500' src={Leon} />
    </div>
  </div>
)
}

export default HomeJugador