import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearTablaPosiciones () {

  
  const [idCampeonato,setidCampeonato]=useState("");
  const [pendiente,setPendiente]=useState(false);

const handleidCampeonatoChange = (e) => {
    setidCampeonato(e.target.value);
  };




  const iniciarTablaVacia =  async () => {
    setPendiente(true);

    fetch(`http://localhost:8080/iniciarTablaPosicionesCampeonato?idCampeonato=${idCampeonato}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
   
  }).then(  ()=> {setPendiente(false)})
    
  };

  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-150">
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <form>

            <div className="container">
             <div className="row"> </div>
                <input type="idCampeonato" className="form-control" placeholder="Id Campeonato"  onChange={handleidCampeonatoChange}/>
                <br/>
              </div>
           <div className="form-group">
           {!pendiente && <input type="Button" value="Crear Tabla" className="boton" onClick={iniciarTablaVacia} />}
             {pendiente && <input type="Button" value="Creando Tabla..." className="boton" onClick={iniciarTablaVacia} />}
             
     
            </div>
            </form>
          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default CrearTablaPosiciones