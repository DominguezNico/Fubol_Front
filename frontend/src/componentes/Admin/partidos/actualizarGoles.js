import React, { useContext, useState, useEffect } from "react";

import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";


function ActualuzarGoles () {

  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);
  const [tipo,setTipo]=useState('a favor');
  const [tipos, setTipos]=useState(['sentido','a favor','en contra'])
  const [pendiente,setPendiente]=useState(false);
  
  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);
  const [minuto,setminuto]=useState('');

/*HACER COMO CREAR FALTA Y AGREGAR JUGADOR
LLAMAR FETCH A AGREGAR GOL( ID JUGADOR)*/


  useEffect(() => {
    obtenerPartidos();
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
      await fetch('https://futbol--back.herokuapp.com/getPartidos')
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
     })

     const  obtenerJugadores =  async () =>{
      await fetch(`https://futbol--back.herokuapp.com/getJugadoresLocales?idPartido=${buscarPartidos}`)
       .then(response =>response.json())
       .then(response => {
    
         let nombres=[]
         console.log("RESULTA")
        console.log(response)
         response?.map(datos => {
          nombres.push([datos.jugador.nombre,datos.jugador.apellido,datos.jugador.documento,datos.jugador.id,datos.jugador.idClub,datos.club.nombre])
         })
    
    
         setJugadores([["Nombre","Apellido","X","idClub","Club","Club"]].concat(nombres));
    
    
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

      fetch(`https://futbol--back.herokuapp.com/actualizarGolesLocal?idPartido=${buscarPartidos}`, requestOptions )
      .then( () => {
          console.log('Se agrego el responsable');
          setPendiente(false)
      })

      fetch(`https://futbol--back.herokuapp.com/addGol?minuto=${minuto}&tipo=${tipo}&idJugador=${buscarJugador}&idPartido=${buscarPartidos}`,requestOptions)
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
                              <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]+" - "+jugador[5]} </option>
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
  export default ActualuzarGoles
