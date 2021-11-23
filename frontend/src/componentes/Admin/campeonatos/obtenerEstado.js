
import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ObtenerEstado () {

 

const [estado,setEstado]=useState("");
const [buscarCampeonatos,setBuscarCampeonatos]=useState('');
const [campeonatos,setCampeonatos]=useState([]);
const [pendiente,setPendiente]=useState(false);

  useEffect(() => {
    obtenerCampeonatos();
  },[]);

  
const handlesetEstadoChange = (e) => {
  setEstado(e.target.value);
  };

  const handleIdChange = (e) => {
    console.log("VALOR: "+e.target.value)
    setBuscarCampeonatos(e.target.value);
}



const  obtenerCampeonatos =  async () =>{
  await fetch('http://localhost:8080/obtenerCampeonatos')
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






  const getEstadoCampeonato =   () => {

    if(buscarCampeonatos!="IdCampeonatos"){
      setPendiente(true);
      
       fetch(`http://localhost:8080/getCampeonatobyID?id=${buscarCampeonatos}` )
      
      .then(response => response.json())
      .then(data => setEstado(data.estado))
      .then( () => {
        console.log('Se creo la tabla');
         setPendiente(false)
    })
    }
  }




  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-150">
        <div className="card2">
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