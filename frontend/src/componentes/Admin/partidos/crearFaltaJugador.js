import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function CrearFaltaJugador () {

 

  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);

  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);

  const [buscarCampeonato,setBuscarCampeonato]=useState('');
  const [campeonatos,setCampeonatos]=useState([]);

  const [minuto,setminuto]=useState('');
  const [tipo,settipo]=useState('');
  const [pendiente,setPendiente]=useState(false);




  useEffect(() => {
    obtenerPartidos();
    obtenerJugadores();
    obtenerCampeonatos();
  },[]);




const handleIdPartidoChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}

const handleIdJugadorChange = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarJugador(e.target.value);
}

const handleCampeonatoChange = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarCampeonato(e.target.value);
}


const handleMinutoChange = (e) => {
  setminuto(e.target.value);
};

const handleTipoChange = (e) => {
    settipo(e.target.value);
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


 const  obtenerJugadores =  async () =>{
  await fetch('http://localhost:8080/getJugadores')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]
     console.log("RESULTA")
    console.log(response)
     response.map(datos => {
       nombres.push([datos.nombre,datos.id])
     })


     setJugadores([["Jugadores","IdJugadores"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }







  const crearFalta =   () => {

    if(buscarPartidos!="IdPartidos"){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

      fetch(`http://localhost:8080/addFalta?minuto=${minuto}&tipo=${tipo}&idJugador=${buscarJugador}&idPartido=${buscarPartidos}&idCampeonato=${buscarCampeonato}`, requestOptions )
      .then( () => {
          console.log('Se agrego el jugador');
          setPendiente(false)
      })
    }
    
  }



  
 console.log(campeonatos)
    return(
      <div className="containerrr3">
       <div className="d-flex justify-content-center h-100">
        <div className="card3">
          <div className="card-header">
          <div className="card-body">
            <form>

              <div className="container">
                <div className="row"> </div>
                <input type="text" id="doc" className="form-control col-20" placeholder="Minuto"  onChange={handleMinutoChange} />
                <br/>
                <input type="fechaInicio" className="form-control col-20" placeholder="Tipo"  onChange={handleTipoChange}/>
                <br/>


                 <div className="dropdown">
                     <select onChange={handleIdPartidoChange}>
                        {partidos.map(partido => {
                            return (
                              <option value={partido[1]}> {partido[0]} </option>
                            )
                          })}
                      </select>
                 </div>
                <br/>


                <div className="dropdown">
                      <select onChange={handleIdJugadorChange}>
                          {jugadores.map(jugador => {
                            console.log(jugador)
                            return (
                              <option value={jugador[1]}> {jugador[0]} </option>
                            )
                          })}
                        </select>
                        
                </div> 
                <br/>
                
                <div className="dropdown">
                     <select onChange={handleCampeonatoChange}>
                        {campeonatos.map(campeonato => {
                         
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
           {!pendiente && <input type="Button" value="Crear Falta" className="boton" onClick={crearFalta} />}
             {pendiente && <input type="Button" value="Creando Falta..." className="boton" onClick={crearFalta} />}
             
            
            </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
  
  }
  export default CrearFaltaJugador