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
  const [tipo,settipo]=useState('amarilla');
  const [pendiente,setPendiente]=useState(false);

  const [falta,setFaltas]=useState(['amarilla','roja'])
  




  useEffect(() => {
    obtenerPartidos();
    obtenerCampeonatos();
  },[]);




const handleIdPartidoChange = (e) => {
    let aux=e.target.value.split(',')
    setBuscarPartidos(aux[3]);
    setBuscarCampeonato(aux[4])
}

const handleIdJugadorChange = (e) => {
  setBuscarJugador(e.target.value);
}




const handleMinutoChange = (e) => {
  setminuto(e.target.value);
};

const handleTipoChange = (e) => {
    settipo(e.target.value);
};

    



const  obtenerPartidos =  async () =>{
  await fetch('https://futbolito-back.herokuapp.com/getPartidos')
  .then(response =>response.json())
  .then(response => {
 
    let nombres=[]
    console.log("response")
    console.log(response)
    response?.map(datos => {
     nombres.push([datos.nroFecha,datos.clubLocal.nombre, datos.clubVisitante.nombre,datos.id,datos.campeonato.idCampeonato])
    })
     setPartidos([["Partido","Local","Visitante"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
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

 useEffect(()=>{
  obtenerJugadores();
 })

 const  obtenerJugadores =  async () =>{
  await fetch(`https://futbolito-back.herokuapp.com/getJugadoresLocales?idPartido=${buscarPartidos}`)
   .then(response =>response.json())
   .then(response => {
  
    let nombres=[]

    response.map(datos => {
     nombres.push([datos.jugador.nombre,datos.jugador.apellido,datos.jugador.documento,datos.jugador.id,datos.jugador.idClub,datos.club.nombre])
    })



     setJugadores([["Nombre","Apellido","X","idClun","club","club"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }


 
  const crearFalta =   () => {

    if(minuto.length==0 || tipo.length==0){
      alert("Los campos no deben quedar vacios")
    }else{

    if(buscarPartidos!="IdPartidos"){
      setPendiente(true);
      

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };


      fetch(`
      
      k.herokuapp.com/addFalta?minuto=${minuto}&tipo=${tipo}&idJugador=${buscarJugador}&idPartido=${buscarPartidos}&idCampeonato=${buscarCampeonato}`, requestOptions )
      .then( () => {
          console.log('Se agrego el jugador');
          setPendiente(false)
      })
    }
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
                <select onChange={handleTipoChange}>
                  {falta?.map(faltas => {

                    return (
                      <option value={faltas}> {faltas} </option>
                    )
                  })}
                </select>  
                <br/>
                <br/>


                 <div className="dropdown">
                     <select onChange={handleIdPartidoChange}>
                        {partidos?.map(partido => {
                          
                            return (
                              <option value={partido}> {'Fecha: '+partido[0]+' - '+partido[1]+' vs '+partido[2]} </option>
                            )
                          })}
                      </select>
                 </div>
                <br/>


                <div className="dropdown">
                      <select onChange={handleIdJugadorChange}>
                          {jugadores?.map(jugador => {
                            return (
                              <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]+" - "+jugador[5]} </option>
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
