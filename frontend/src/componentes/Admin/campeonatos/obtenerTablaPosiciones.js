import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ObtenerTablaPosiciones () {

  const [id,setId]=useState("");
  const [items,setItems]=useState([])
   

    
  const obtenerPosiciones =  async () => {
     await fetch(`http://localhost:8080/obtenerTablaPosicionCampeonato?idCampeonato=${id}`)
     .then(response => response.json())
     .then(data => setItems([data]))
     .then(console.log("ITEMS "+items));
        

  
     
  };

  const handleidChange =  (e) => {
     setId(e.target.value);
    };


  

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
                <input type="Button" value="getEstadoCampeonato" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={obtenerPosiciones}/>
                
                       
              </div>


          </form>
            </div>


           <div> POSICIONES</div>
           <div className = "App">
            <h1> TABLAS </h1>  {
                items.map((item) => ( 
                <ol key = {item.cantidadganados } >
                   idTabla: {item.cantidadganados } 
                   
                    </ol>
                ))
            }
        </div>

           </div>

          </div>

        </div>
      
     
      </div>
    )
  
  }
  export default ObtenerTablaPosiciones