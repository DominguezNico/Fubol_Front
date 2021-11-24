import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ModificarFechaPartido () {

  
  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);


  const [fecha,setFecha]=useState("");
  const [pendiente,setPendiente]=useState(false);



  useEffect(() => {
    obtenerPartidos();
  },[]);



  const handleIdChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
    };




    const  obtenerPartidos =  async () =>{
      await fetch('http://localhost:8080/getPartidos')
       .then(response =>response.json())
       .then(response => {
 
         let nombres=[]
 
 
         response?.map(datos => {
          nombres.push([datos.nroFecha,datos.clubLocal.nombre, datos.clubVisitante.nombre,datos.id])
         })
 
         
         setPartidos([["Partido","Local","Visitante"]].concat(nombres));
 
 
       }).catch(e => {
         console.log(e);
       })
     }





  const moficiarFecha =   () => {

    if(buscarPartidos!="IdPartidos"){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

      fetch(`http://localhost:8080/modificarFechaPartido?fecha=${fecha}&idPartido=${buscarPartidos}`, requestOptions )
      .then( () => {
          console.log('Se agrego el responsable');
          setPendiente(false)
      })
    }
  }




  

    return(
      <div className="container">
        <br/>
       <div className="d-flex justify-content-center h-150">
        <div className="card2">
          <div className="card-header">
          <div className="card-body">
            <form>

            <div className="dropdown">
                       <select onChange={handleIdChange}>
                          {partidos?.map(partido => {
                            return (
                              <option value={partido[3]}> {'Fecha: '+partido[0]+' - '+partido[1]+' vs '+partido[2]} </option>
                            )
                          })}
                        </select>
                        
            <div className="container">
             <div className="row"> </div>
             <br/>
                <input type="fecha" className="form-control" placeholder="Ingresar nueva fecha "  onChange={handleFechaChange}/>
                <br/>
              </div>


             
              
              </div> 
               <br/> 

              <br/> 
             <br/> 
             <div className="form-group centrar">
               {!pendiente && <input type="Button" value="Modificar Fecha " className="boton" onClick={moficiarFecha} />}
               {pendiente && <input type="Button" value="Modificando ..." className="boton" onClick={moficiarFecha} />}
               
                      
             </div>
            </form>
          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default ModificarFechaPartido
