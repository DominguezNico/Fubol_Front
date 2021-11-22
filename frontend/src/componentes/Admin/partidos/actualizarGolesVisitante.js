import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ActualizarGolesVisitante () {

  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);
  const [goles,setGoles]=useState('');
  const [pendiente,setPendiente]=useState(false);




  useEffect(() => {
    obtenerPartidos();
  },[]);



  const handleIdChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}


  const handleGolesChange = (e) => {
    setGoles(e.target.value);
    };

    

    const  obtenerPartidos =  async () =>{
      await fetch('http://localhost:8080/getPartidos')
       .then(response =>response.json())
       .then(response => {
 
         let nombres=[]
 
 
         response.map(datos => {
           nombres.push([datos.nroFecha,datos.id])
         })
 
         
         setPartidos([["Partidos","IdPartidos"]].concat(nombres));
 
 
       }).catch(e => {
         console.log(e);
       })
     }






  const cambiarGol =   () => {

    if(buscarPartidos!="IdPartidos"){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

      fetch(`http://localhost:8080/actualizarGolesVisitante?idPartido=${buscarPartidos}&goles=${goles}`, requestOptions )
      .then( () => {
          console.log('Se agrego el responsable');
          setPendiente(false)
      })
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
                <input type="goles" className="form-control col-20" placeholder="Goles"  onChange={handleGolesChange}/>
                <br/>
              </div>

             

              <div className="dropdown">
                       <select onChange={handleIdChange}>
                          {partidos.map(partido => {
                            return (
                              <option value={partido[1]}> {partido[0]} </option>
                            )
                          })}
                        </select>
              
              </div> 
               <br/> 

             <br/> 
             <br/> 
             <div className="form-group centrar">
               {!pendiente && <input type="Button" value="Actualizar Goles " className="boton" onClick={cambiarGol} />}
               {pendiente && <input type="Button" value="Actualizando ..." className="boton" onClick={cambiarGol} />}
               
                      
             </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default ActualizarGolesVisitante