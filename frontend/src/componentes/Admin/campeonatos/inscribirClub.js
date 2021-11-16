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
    fetch(` localhost:8080/inscribirClubEnCampeonato?id=${id}&idCampeonato=${idCampeonato}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
   
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
                <div className="input-group-prepend"></div>
                <input type="text" id="doc" className="form-control" placeholder="id"  onChange={handledidChange} />
              </div>




              <div className="input-group form-group">
                <div className="input-group-prepend"></div>
                <input type="idCampeonato" className="form-control" placeholder="idCampeonato"  onChange={handleidCampeonatoChange}/>
              </div>


            



              <div className="form-group">
                <input type="Button" value="crearCamp" className="btn btn-primary col-lg-5 mx-1 mb-1" onClick={inscribir}/>
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