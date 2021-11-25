import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ActualizarGolesVisitante () {

  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);
  const [pendiente,setPendiente]=useState(false);
  const [tipo,setTipo]=useState('a favor');
  const [tipos, setTipos]=useState(['sentido','a favor','en contra'])

  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);
  const [minuto,setminuto]=useState('');


  useEffect(() => {
    obtenerPartidos();
    obtenerJugadores();
  },[]);



  const handleIdChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}


    const handleIdJugadorChange = (e) => {
      console.log("VALOR "+e.target.value)
      setBuscarJugador(e.target.value);
    }
    
    const handleMinutoChange = (e) => {
  setminuto(e.target.value);
};

const handleTipoChange = (e) => {
    setTipo(e.target.value);
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

     useEffect(()=>{
      obtenerJugadores();
     },buscarPartidos)

     const  obtenerJugadores =  async () =>{
      await fetch(`http://localhost:8080/getJugadoresVisitantes?idPartido=${buscarPartidos}`)
       .then(response =>response.json())
       .then(response => {
    
         let nombres=[]
         console.log("RESULTA")
        console.log(response)
         response?.map(datos => {
          nombres.push([datos.jugador.nombre,datos.jugador.apellido,datos.jugador.documento,datos.jugador.id,datos.jugador.idClub])
         })
    
    
         setJugadores([["Nombre","Apellido","X"]].concat(nombres));
    
    
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

      fetch(`http://localhost:8080/actualizarGolesVisitante?idPartido=${buscarPartidos}`, requestOptions )
      .then( () => {
          console.log('Se agrego el responsable');
          setPendiente(false)
      })

      fetch(`http://localhost:8080/addGol?minuto=${minuto}&tipo=${tipo}&idJugador=${buscarJugador}&idPartido=${buscarPartidos}`,requestOptions)
      .then( () => {
        console.log('Se agrego el jugador');
        setPendiente(false) })
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
              <input type="text" id="doc" className="form-control col-20" placeholder="Minuto"  onChange={handleMinutoChange} />
                <br/>
              </div>
              <div className="dropdown">
              <select onChange={handleTipoChange}>
                  {tipos?.map(faltas => {
                    console.log(faltas)
                    return (
                      <option value={faltas}> Sentido: {faltas} </option>
                    )
                  })}
                </select>  
                        </div>
                <br/>
              <div className="dropdown">
                       <select onChange={handleIdChange}>
                          {partidos?.map(partido => {
                            return (
                              <option value={partido[3]}> {'Fecha: '+partido[0]+' - '+partido[1]+' vs '+partido[2]} </option>
                            )
                          })}
                        </select>
              
              </div> 
               <br/> 


               <div className="dropdown">
                      <select onChange={handleIdJugadorChange}>
                          {jugadores?.map(jugador => {
                            console.log(jugador)
                            return (
                              <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]} </option>
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
