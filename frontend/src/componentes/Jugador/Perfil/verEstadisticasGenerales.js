import React, { useEffect, useState } from 'react'


function VerEstadisticas (props){
  useEffect(() => {
    obtenerFaltas();
    obtenerGoles();
    obtenerPartidosGanados();
    obtenerPartidosPerdidos();
  },[]);

 

  const [faltas,setFaltas]=useState(0)
  const [goles,setGoles]=useState(0)
  const [ganados,setGanados]=useState(0)
  const [perdidos,setPerididos]=useState(0)

  const obtenerFaltas = async () =>{
 
    
    await fetch(`http://localhost:8080/getFaltasJugador?idJugador=${props.location.state.id}`)
      .then(response =>response.json())
      .then(response => {

        let cont=0;
        response.map(()=>{
          cont=cont+1;
        })

        setFaltas(cont)

      }).catch(e=> console.log(e))
  
  }

  const obtenerGoles = async () =>{
 
    
    await fetch(`http://localhost:8080/getGolesJugador?idJugador=${props.location.state.id}`)
      .then(response =>response.json())
      .then(response => {

        let cont=0;
        response.map(()=>{
          cont=cont+1;
        })

       
        setGoles(cont)

      }).catch(e=> console.log(e))
  
  }

  const obtenerPartidosGanados = async () =>{
 
    
    await fetch(`http://localhost:8080/partidosGanados?idClub=${props.location.state.idClub}`)
    .then(response =>response.json()) 
    .then(response => {
        console.log(response)
        setGanados(response)
      }).catch(e=> console.log(e))
  
  }

  const obtenerPartidosPerdidos = async () =>{
 
    
    await fetch(`http://localhost:8080/partidosPerdidos?idClub=${props.location.state.idClub}`)
    .then(response =>response.json())   
    .then(response => {
        setPerididos(response)
      }).catch(e=> console.log(e))
  
  }



 
 return(
  <div >
    <table className="centrarTabla">
      <thead>
        <tr>
          <th>Faltas</th><th>Goles</th><th>Partidos ganados</th><th>Partidos Perdidos</th>
        </tr>
      </thead>

      <tr>

        <td>{faltas}</td><td>{goles}</td><td>{ganados}</td><td>{perdidos}</td>
      </tr>
    </table>
    <br/>
    <br/>
  </div>


 )
}


  export default VerEstadisticas;
