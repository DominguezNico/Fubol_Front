import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearTablaPosiciones () {

  
  const [buscarCampeonatos,setBuscarCampeonatos]=useState('');
  const [campeonatos,setCampeonatos]=useState([]);
  const [pendiente,setPendiente]=useState(false);

  const [campeonatoValido,setCampeonatoValido]=useState(false);



  useEffect(() => {
    obtenerCampeonatos();
  },[]);


const handleIdChange = (e) => {
        console.log("VALOR: "+e.target.value)
        setBuscarCampeonatos(e.target.value);
    }



  const  obtenerCampeonatos =  async () =>{
      await fetch('http://localhost:8080/obtenerCampeonatos1')
       .then(response =>response.json())
       .then(response => {
 
         let nombres=[]
 
 
         response.map(datos => {
           nombres.push([datos.descripcion,datos.idCampeonato])
         })
 
 
         setCampeonatos([["Campeonatos","IdCampeonatos"]].concat(nombres));
 
 
       }).catch(e => {
         console.log(e);
       })
     }





  const iniciarTablaVacia = () => {
    
    if(buscarCampeonatos!="IdCampeonatos"){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

       fetch(`http://localhost:8080/iniciarTablaPosicionesCampeonato?idCampeonato=${buscarCampeonatos}`, requestOptions )
      .then( () => {
          console.log('Se creo la tabla');
           setPendiente(false)
      })
    }
  }
    
      

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-150">
        <div className="card">
          <div className="card-header">
          <div className="card-body">
            <form>

            <div className="container">
                 <div className="dropdown">
                        
                     <select onChange={handleIdChange}>
                        {campeonatos.map(campeonato => {
                            return (
                              <option value={campeonato[1]}> {campeonato[0]} </option>
                            )
                          })}
                        </select>
                        
                  </div> 
             <br/>
            </div>
           <div className="form-group centrar">
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