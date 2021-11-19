import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";
import '../../../estilos/estiloRepresentante.css'


function Registrar(){


const [documento,setDocumento]=useState("");
const [nombre,setNombre]=useState("");
const [apellido,setApellido]=useState("");
const [fechaNacimiento,setFecha]=useState("");
const [tipoDoc,setTipoDoc]=useState("");



const handledocChange = (e) => {
    setDocumento(e.target.value);
};

const handlenombreChange = (e) => {
    setNombre(e.target.value);
};

const handleapellidoChange = (e) => {
    setApellido(e.target.value);
};
const handlefechaChange = (e) => {
    setFecha(e.target.value);
};
const handletipoChange = (e) => {
    setTipoDoc(e.target.value);
}; 

  const agregarJugador=  async () => {
     /*await fetch(`http://localhost:8080/getCampeonatobyID?id=${id}`)
     .then(response => response.json())
     .then(data => setEstado(data.estado))
     .then(console.log(estado));*/
  }


return(
    <div className="containerrr3">
    <div className="d-flex justify-content-center h-100">
     <div className="card3">
       <div className="card-header">
       <div className="card-body">
         <form>



           <div className="container">
             <div className="row"> </div>
             <input type="doc" className="form-control col-100" placeholder="Ingrese el documento"  onChange={ handledocChange }/>
             <br/> 
             <input type="tipo" className="form-control" placeholder="Ingrese el tipo de documento"  onChange={ handletipoChange }/>
             <br/> 
             <input type="nombre" className="form-control" placeholder="Ingrese el nombre"  onChange={ handlenombreChange }/>
             <br/> 
             <input type="apellido" className="form-control" placeholder="Ingrese el apellido"  onChange={ handleapellidoChange }/>
             <br/> 
             <input type="fecha" className="form-control" placeholder="Ingrese la fecha de nacimiento"  onChange={ handlefechaChange }/>
           </div>


           <br/> 
           <br/> 
           <div className="form-group">
             <input type="Button" value="Registrar jugador" className="boton" onClick={agregarJugador}/>
             
                    
           </div>


       </form>
         </div>
         </div> 
         </div> 
         </div> 
    </div>
)
}

export default Registrar