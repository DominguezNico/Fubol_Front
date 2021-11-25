import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function IncribirClub () {

  const [buscarCampeonatos,setBuscarCampeonatos]=useState('');
  const [campeonatos,setCampeonatos]=useState([]);
  const [buscarClubes,setBuscarClubes]=useState('');
  const [clubes,setClubes]=useState([]);
  const [pendiente,setPendiente]=useState(false);

  

  useEffect(() => {
    obtenerCampeonatos();
    obtenerClubes();
  },[]);


  const handleIdChange = (e) => {
    console.log("VALOR: "+e.target.value)
    setBuscarCampeonatos(e.target.value);
}

const handleIdClubChange = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarClubes(e.target.value);
}


const  obtenerClubes =  async () =>{
  await fetch('http://localhost:8080/obtenerClubes')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response?.map(datos => {
       nombres.push([datos.nombre,datos.idClub])
     })


     setClubes([["Clubes","IdClubes"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }


 const  obtenerCampeonatos =  async () =>{
  await fetch('http://localhost:8080/obtenerCampeonatos')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response?.map(datos => {
       nombres.push([datos.descripcion,datos.idCampeonato])
     })


     setCampeonatos([["Campeonatos","IdCampeonatos"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }






  const inscribir =   () => {
    if(buscarCampeonatos!="IdCampeonatos" ){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

       fetch(`http://localhost:8080/inscribirClubEnCampeonato?id=${buscarClubes}&idCampeonato=${buscarCampeonatos}`, requestOptions )
      .then( () => {
          console.log('Se incribio');
          alert("Se inscribio correctamente");
           setPendiente(false)
      })
    }
 }

  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-100">
        <div className="card2">
          <div className="card-header">
          <div className="card-body">
             <form> 
             <div className="container">
                 
                <div className="dropdown">
                     <select onChange={handleIdChange}>
                        {campeonatos?.map(campeonato => {
                            return (
                              <option value={campeonato[1]}> {campeonato[0]} </option>
                            )
                          })}
                      </select>
                  </div>
                  <br/>


                <div className="dropdown">
                      <select onChange={handleIdClubChange}>
                          {clubes?.map(club => {
                            return (
                              <option value={club[1]}> {club[0]} </option>
                            )
                          })}
                        </select>
                        
                  </div> 
                  <br/>
            </div>

           <br/> 
           <div className="form-group centrar">
           {!pendiente && <input type="Button" value="Incribir club " className="boton" onClick={inscribir} />}
             {pendiente && <input type="Button" value="Inscribiendo club ..." className="boton" onClick={inscribir} />}
                         
           </div>
          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default IncribirClub