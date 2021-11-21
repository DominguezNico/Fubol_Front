import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ActualuzarGoles () {

  const inicialEstadoParams ={
    idPartido:"",
   goles:"",
   pendiente:"",
  };

  const [idPartido,setIdPartido]=useState(inicialEstadoParams);
  const [goles,setGoles]=useState(inicialEstadoParams);
  const [pendiente,setPendiente]=useState(false);



  const handledIdPartidoChange = (e) => {
    setIdPartido(e.target.value);
  };

  const handleGolesChange = (e) => {
    setGoles(e.target.value);
    };

    


  const cambiarGol =   () => {

    setPendiente(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ })
  };

    fetch(`http://localhost:8080/actualizarGolesLocal?idPartido=${idPartido}&goles=${goles}`,requestOptions)
    .then(()=>{setPendiente(false)}
    )
    
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
                <input type="text" id="doc" className="form-control col-20" placeholder="Id Partido"  onChange={handledIdPartidoChange} />
                <br/>
                <input type="goles" className="form-control col-20" placeholder="Goles"  onChange={handleGolesChange}/>
                <br/>
        
              </div>


            <br/> 
           <br/> 
           <div className="form-group">
           {!pendiente && <input type="Button" value="Actualizar Goles" className="boton" onClick={cambiarGol} />}
             {pendiente && <input type="Button" value="Actualizando Goles..." className="boton" onClick={cambiarGol} />}
             
            
            </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default ActualuzarGoles