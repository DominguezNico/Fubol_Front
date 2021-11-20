import React, { useContext, useState, useEffect } from "react";
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearEstadistica () {


 const [id,setId]=useState("");

 
const handleIdChange = (e) => {
  setId(e.target.value);
  };



  const crear =  async () => {
     await fetch(`http://localhost:8080/confeccionEsta?idClub=${id}`)
     .then((response) => response.json())
    .then((tablaJSON)=> {this.setState({tablas:tablaJSON}) 
  });
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
                <input type="id" className="form-control" placeholder="id"  onChange={ handleIdChange }/>
              </div>



              <div className="form-group">
                <input type="Button" value="getEstadoCampeonato" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={crear}/>
                
                       
              </div>


          </form>
            </div>
           <div> POSICIONES</div>
           

           </div>

          </div>

        </div>
      
     
      </div>
    )
  
  }
  export default CrearEstadistica