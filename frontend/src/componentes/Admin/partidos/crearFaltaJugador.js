import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearFaltaJugador () {

  const inicialEstadoParams ={
    idPartido:"",
    idJugador:"",
    idCampeonato:"",
    minuto:"",
    tipo:"",
    pendiente:"",
  };

  const [idPartido,setIdPartido]=useState(inicialEstadoParams);
  const [idJugador,setidJugador]=useState(inicialEstadoParams);
  const [idCampeonato,setidCampeonato]=useState(inicialEstadoParams);
  const [minuto,setminuto]=useState(inicialEstadoParams);
  const [tipo,settipo]=useState(inicialEstadoParams);
  const [pendiente,setPendiente]=useState(false);

  const handledIdPartidoChange = (e) => {
    setIdPartido(e.target.value);
  };

  const handledIdJugadorChange = (e) => {
    setidJugador(e.target.value);
  };


  const handledeIdCampeonatoChange = (e) => {
    setidCampeonato(e.target.value);
  };

const handleMinutoChange = (e) => {
  setminuto(e.target.value);
  };

  const handleTipoChange = (e) => {
    settipo(e.target.value);
    };

    


  const crearFalta =   () => {

    setPendiente(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ })
  };

    fetch(`http://localhost:8080/addFalta?minuto=${minuto}&tipo=${tipo}&idJugador=${idJugador}&idPartido=${idPartido}&idCampeonato=${idCampeonato}`,requestOptions)
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
                <input type="text" id="doc" className="form-control col-20" placeholder="Minuto"  onChange={handleMinutoChange} />
                <br/>
                <input type="fechaInicio" className="form-control col-20" placeholder="Tipo"  onChange={handleTipoChange}/>
                <br/>
                <input type="fechaFin" className="form-control col-20" placeholder="id Jugador"  onChange={handledIdJugadorChange}/>
                <br/>
                <input type="estado" className="form-control col-20" placeholder="id Partido"  onChange={handledIdPartidoChange}/>
                <br/>
                <input type="estado" className="form-control col-20" placeholder="id Campeonato"  onChange={handledeIdCampeonatoChange}/>

              </div>


            <br/> 
           <br/> 
           <div className="form-group">
           {!pendiente && <input type="Button" value="Crear Falta" className="boton" onClick={crearFalta} />}
             {pendiente && <input type="Button" value="Creando Falta..." className="boton" onClick={crearFalta} />}
             
            
            </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default CrearFaltaJugador