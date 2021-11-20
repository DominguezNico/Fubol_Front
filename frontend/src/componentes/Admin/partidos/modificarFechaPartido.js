import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ModificarFechaPartido () {

  
  const [idPartido,setIdPartido]=useState("");
  const [fecha,setFecha]=useState("");
  const [pendiente,setPendiente]=useState(false);



const handleidPartidoChange = (e) => {
  setIdPartido(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
    };



  const moficiarFecha =  async () => {
    setPendiente(true);

    fetch(`http://localhost:8080/modificarFechaPartido?fecha=${fecha}&idPartido=${idPartido}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
   
  }).then(  ()=> {setPendiente(false)})
    
  };

  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-150">
        <div className="card2">
          <div className="card-header">
          <div className="card-body">
            <form>

            <div className="container">
             <div className="row"> </div>
                <input type="idPartido" className="form-control" placeholder="Id Partido"  onChange={handleidPartidoChange}/>
                <br/>
                <input type="fecha" className="form-control" placeholder="Fecha"  onChange={handleFechaChange}/>
                <br/>
                <br/>

              </div>
               <div className="form-group">
               {!pendiente && <input type="Button" value="Modificar Fecha" className="boton" onClick={moficiarFecha} />}
                {pendiente && <input type="Button" value="Modificando Fecha..." className="boton" onClick={moficiarFecha} />}
             
     
            </div>
            </form>
          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default ModificarFechaPartido