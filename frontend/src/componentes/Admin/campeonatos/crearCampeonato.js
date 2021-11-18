import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearCampeonato () {

  const inicialEstadoParams ={
    descrip:"",
    fechaInicio:"",
    fechaFin:"",
    estado:"",
  };

  const [descrip,setDescrip]=useState(inicialEstadoParams);
  const [fechaInicio,setfechaInicio]=useState(inicialEstadoParams);
  const [fechaFin,setFechaFin]=useState(inicialEstadoParams);
  const [estado,setEstado]=useState(inicialEstadoParams);



  const handledescripIChange = (e) => {
    setDescrip(e.target.value);
  };

const handlefechaInicioChange = (e) => {
  setfechaInicio(e.target.value);
  };

  const handledesetFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

const handlesetEstadoChange = (e) => {
  setEstado(e.target.value);
  };



  const crearCamp =  async () => {
    fetch(`http://localhost:8080/crearCampeonato?descripcion=${descrip}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&estado=${estado}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
   
  })
    
  };

  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <form>

              <div className="input-group form-group">
                <div className="input-group-prepend"></div>
                <input type="text" id="doc" className="form-control" placeholder="descripcion"  onChange={handledescripIChange} />
              </div>




              <div className="input-group form-group">
                <div className="input-group-prepend"></div>
                <input type="fechaInicio" className="form-control" placeholder="fechaInicio"  onChange={handlefechaInicioChange}/>
              </div>


              <div className="input-group form-group">
                <div className="input-group-prepend"> </div>
                <input type="fechaFin" className="form-control" placeholder="fechaFin"  onChange={handledesetFechaFinChange}/>
              </div>



              <div className="input-group form-group">
                <div className="input-group-prepend"> </div>
                <input type="estado" className="form-control" placeholder="estado"  onChange={handlesetEstadoChange}/>
              </div>



              <div className="form-group">
                <input type="Button" value="crearCamp" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={crearCamp}/>
              </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default CrearCampeonato