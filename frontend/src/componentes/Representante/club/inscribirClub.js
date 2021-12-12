import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function IncribirClub (props) {

  const [buscarCampeonatos,setBuscarCampeonatos]=useState('');
  const [campeonatos,setCampeonatos]=useState([]);
 
  const [pendiente,setPendiente]=useState(false);

  

  useEffect(() => {
    obtenerCampeonatos();
   
  },[]);


  const handleIdChange = (e) => {
    console.log("VALOR: "+e.target.value)
    setBuscarCampeonatos(e.target.value);
}



 const  obtenerCampeonatos =  async () =>{
  await fetch('https://futbolito-back.herokuapp.com/obtenerCampeonatos')
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

       fetch(`https://futbolito-back.herokuapp.com/inscribirClubEnCampeonato?id=${props.location.state.club.idClub}&idCampeonato=${buscarCampeonatos}`, requestOptions )
      .then( () => {
          console.log('Se incribio');
          alert("Se inscribio correctamente");
           setPendiente(false)
      })
    }
 }

  

    return(
      <div className="containerrr3">
       <div className="d-flex justify-content-center h-100">
        <div className="card8">
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