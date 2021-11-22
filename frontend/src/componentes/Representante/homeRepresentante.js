import React from "react";
import Leon from "../../estilos/leon.png"
import "../../estilos/estiloRepresentante.css"
function HomeRepresentate(props){
console.log(props.location.state)
return(
    <div>
        <h1 className="bienvenido"><b>¡Bienvenido! </b></h1>
        <img className="Leon" src={Leon} height="500" alt="Its getting bigger!" />
    </div>
)
}

export default HomeRepresentate