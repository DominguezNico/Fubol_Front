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
    pendiente:"",
  };

  const [descrip,setDescrip]=useState(inicialEstadoParams);
  const [fechaInicio,setfechaInicio]=useState(inicialEstadoParams);
  const [fechaFin,setFechaFin]=useState(inicialEstadoParams);
  const [estado,setEstado]=useState(inicialEstadoParams);
  const [pendiente,setPendiente]=useState(false);


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

  const crearCamp = () => {

    setPendiente(true);

    let campo=false;

    if (descrip.length == 0 || fechaInicio.length == 0 || fechaFin.length==0 || estado.length==0 || pendiente.length==0) {
      alert("Los campos no pueden quedar vacios");
      campo= true;
      
    }

    if(campo==false){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ })
    };
  
      fetch(`http://localhost:8080/crearCampeonato?descripcion=${descrip}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&estado=${estado}`,requestOptions)
      .then(()=>{setPendiente(false)}
      ).catch(e=> console.log(e))
    }else{
      setPendiente(false);
    }

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
                <input type="text" id="doc" className="form-control col-20" placeholder="Descripcion"  onChange={handledescripIChange} />
                <br/>
                <input type="fechaInicio" className="form-control col-20" placeholder="Fecha Inicio"  onChange={handlefechaInicioChange}/>
                <br/>
                <input type="fechaFin" className="form-control col-20" placeholder="Fecha Fin"  onChange={handledesetFechaFinChange}/>
                <br/>
                <input type="estado" className="form-control col-20" placeholder="Estado"  onChange={handlesetEstadoChange}/>
                <br/>
              </div>


            <br/> 
           <br/> 
           <div className="form-group">
           {!pendiente && <input type="Button" value="Crear Campeonato" className="boton" onClick={crearCamp} />}
             {pendiente && <input type="Button" value="Creando Campeonato..." className="boton" onClick={crearCamp} />}
             
            
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