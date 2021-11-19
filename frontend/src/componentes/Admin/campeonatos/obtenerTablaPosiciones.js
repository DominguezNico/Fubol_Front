import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ObtenerTablaPosiciones () {

 const [posiciones,setPosiciones]=useState([]);
 const [id,setId]=useState("");

 
const handleIdChange = (e) => {
  setId(e.target.value);
  };

  const handleChange = (e) => {
    setPosiciones(e.target.value);
    };

  const obtenerPosiciones =  async () => {
     await fetch(`http://localhost:8080/obtenerTablaPosicionCampeonato?idCampeonato=${id}`)
     .then(async response => {
         const data=await response.json();
        
        

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
                <div className="input-group-prepend"> </div>
                <input type="id" className="form-control" placeholder="id"  onChange={ handleIdChange }/>
              </div>



              <div className="form-group">
                <input type="Button" value="getEstadoCampeonato" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={obtenerPosiciones}/>
                
                       
              </div>


          </form>
            </div>
           <div> POSICIONES</div>
           <table>
              <thead>
                <tr>
                  <th>id</th>
                </tr>
              </thead>
              <body>

               
              </body>
            </table>

           </div>

          </div>

        </div>
      
     
      </div>
    )
  
  }
  export default ObtenerTablaPosiciones