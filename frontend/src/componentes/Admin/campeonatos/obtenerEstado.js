
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
       <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <form>



              <div className="input-group form-group">
                <div className="input-group-prepend"> </div>
                <input type="id" className="form-control" placeholder="id"  onChange={ handleidChange }/>
              </div>



              <div className="form-group">
                <input type="Button" value="getEstadoCampeonato" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={getEstadoCampeonato}/>
                
                       
              </div>


          </form>
            </div>
           <div> ESTADO DEL CAMPEONATO: {estado}</div>
           </div>

          </div>

        </div>
      
     
      </div>
    )
  
  }
  export default ObtenerEstado