
import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ObtenerEstado () {

 

const [estado,setEstado]=useState("");
const [id,setId]=useState("");


const handlesetEstadoChange = (e) => {
  setEstado(e.target.value);
  };

  const handleidChange = (e) => {
    setId(e.target.value);
    };


  const getEstadoCampeonato =  async () => {
     await fetch(`http://localhost:8080/getCampeonatobyID?id=${id}`)
     .then(response => response.json())
     .then(data => setEstado(data.estado))
     .then(console.log(estado));
  }




  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-150">
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <form>


              <div className="input-group form-group">
                <div className="input-group-prepend"> </div>
                <input type="id" className="form-control" placeholder="id del Campeonato"  onChange={ handleidChange }/>
              </div>

              <div className="form-group">
              <br/>
              <input type="Button" value="Obtener Estado" className="boton" onClick={getEstadoCampeonato}/>
              <br/>
              </div>
              <p className="card-text-right">
              <strong>Estado : </strong>{estado}<br/> 
              </p>
            </form>
          </div>
          
          </div>

        </div>

      </div>
     
    </div>
    )
  
  }
  export default ObtenerEstado