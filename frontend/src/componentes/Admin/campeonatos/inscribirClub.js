import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function IncribirClub () {

  const [id,setId]=useState("");
  const [idCampeonato,setidCampeonato]=useState("");


  

  const handledidChange = (e) => {
    setId(e.target.value);
  };

const handleidCampeonatoChange = (e) => {
    setidCampeonato(e.target.value);
  };




  const inscribir =  async () => {
    fetch(`http://localhost:8080/inscribirClubEnCampeonato?id=${id}&idCampeonato=${idCampeonato}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
   
  })
    
  };

  

    return(
      <div className="container">
       <div className="d-flex justify-content-center h-100">
        <div className="card2">
          <div className="card-header">
          <div className="card-body">
            <form>

            <div className="container">
             <div className="row"> </div>
                <input type="ID" id="doc" className="form-control" placeholder="Id Club"  onChange={handledidChange} />
                <br/>
                <input type="idCampeonato" className="form-control" placeholder="Id Campeonato"  onChange={handleidCampeonatoChange}/>
                <br/>
              </div>


            <br/> 
           <br/> 
           <div className="form-group">
                <input type="Button" value="INCRIBIR" className="boton" onClick={inscribir}/>
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