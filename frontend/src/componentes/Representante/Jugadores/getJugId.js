import React, { useState } from "react";
import '../../../estilos/estiloRepresentante.css'

function GetJugId(){

    const [documento,setDocumento]=useState("");
    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [fechaNacimiento,setFecha]=useState("");
    const [id,setId]=useState("");

    const handleidChange = (e) => {
        setId(e.target.value);
        };

    const getNombreJugador =  async () => {
        await fetch(`http://localhost:8080/getJugador?idJugador=${id}`)
        .then(response => response.json())
        .then(data => [setNombre(data.nombre), setDocumento(data.documento), setApellido(data.apellido), setFecha(data.fechaNacimiento)]) 
     }

return(
    <div className="containerrr">
    <div className="d-flex justify-content-center h-50">
     <div className="card">
       <div className="card-header">
       <div className="card-body">
         <form>



           <div className="input-group form-group">
             <div className="input-group-prepend"> </div>
             <input type="id" className="form-control" placeholder="Ingrese el id del jugador"  onChange={ handleidChange }/>
           </div>


           <br/> 
           <div className="form-group">
             <input type="Button" value="Buscar jugador" className="boton" onClick={getNombreJugador}/>
             
                    
           </div>


       </form>
         </div>
         </div> 
         </div> 
         </div> 
         
         <br/> 
         <br/> 
         <br/> 
         <br/> 
         <br/> 
         <div className="containerrr2">
    <div className="d-flex justify-content-center h-50">
     <div className="card2">
       <div className="card-header">
       <div className="card-body"></div>
       <h4>Jugador</h4> 
       <br/> 
       <p>Documento: <b>{documento}</b></p> 
       <p>Nombre: <b>{nombre}</b></p> 
       <p>Apellido: <b>{apellido}</b></p> 
       <p>Fecha nacimiento: <b>{fechaNacimiento}</b></p>
       </div>
         </div> 
         </div> 
        </div>
        </div>

)
}



export default GetJugId