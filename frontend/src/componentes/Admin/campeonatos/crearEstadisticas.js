import React, { useEffect, useState } from 'react'
import '../../../estilos/estiloAdmin.css'

function VerEstadisticas (props){
  useEffect(() => {
    obtenerJugadores();
    
    
  },[]);

 

  const [faltas,setFaltas]=useState(0)
  const [goles,setGoles]=useState(0)
  const [ganados,setGanados]=useState(0)
  const [perdidos,setPerididos]=useState(0)
  
  const [buscarJugador,setBuscarJugador]=useState('');
  const [buscarClub,setBuscarClub]=useState('');
  const [jugadores,setJugadores]=useState([]);


  const  obtenerJugadores =  async () =>{
    await fetch('http://localhost:8080/getJugadores')
     .then(response =>response.json())
     .then(response => {
  
       let nombres=[]


       response?.map(datos => {
         nombres.push([datos.nombre,datos.id,datos.idClub])
       })
  
  
       setJugadores([["Jugadores","IdJugadores","IdClub"]].concat(nombres));
  
  
     }).catch(e => {
       console.log(e);
     })
    
   }

  const handleIdJugadorChange = (e) => {
    
    let aux=e.target.value.split(',')
    
    console.log(aux)
    setBuscarJugador(aux[3]);
    setBuscarClub(aux[4])
  }


  const obtenerDatos =async ()=>{

    console.log("buscarJugador")
    console.log(buscarJugador)
    console.log("buscarClub")
    console.log(buscarClub)


    if(buscarJugador.length==0 || buscarClub.length==0){
      alert("Elija un jugador")
    }else if(buscarJugador=='IdJugadores' || buscarClub.length=="IdClub"){
      alert("Elija un jugador")
    }else{
      
    

    //Faltas
    await fetch(`http://localhost:8080/getFaltasJugador?idJugador=${buscarJugador}`)
      .then(response =>response.json())
      .then(response => {

        let cont=0;
        response?.map(()=>{
          cont=cont+1;
        })

        setFaltas(cont)
        console.log(faltas)

      }).catch(e=> console.log(e))
    
    //Goles
    await fetch(`http://localhost:8080/getGolesJugador?idJugador=${buscarJugador}`)
      .then(response =>response.json())
      .then(response => {

        let cont=0;
        response?.map(()=>{
          cont=cont+1;
        })

       
        setGoles(cont)

      }).catch(e=> console.log(e))

    //PartidosGanados
    await fetch(`http://localhost:8080/partidosGanados?idClub=${buscarClub}`)
    .then(response =>response.json()) 
    .then(response => {
        setGanados(response)
      }).catch(e=> console.log(e))

    //PartidosPeridos
    await fetch(`http://localhost:8080/partidosPerdidos?idClub=${buscarClub}`)
    .then(response =>response.json())   
    .then(response => {
        setPerididos(response)
      }).catch(e=> console.log(e))  
    }
  }
  

  const  obtenerJugadores =  async () =>{
    await fetch('http://localhost:8080/getJugadores')
     .then(response =>response.json())
     .then(response => {
  
       let nombres=[]


       response.map(datos => {
        nombres.push([datos.nombre,datos.apellido,datos.documento,datos.id,datos.idClub])
       })
  
  
       setJugadores([["Nombre","Apellido","X"]].concat(nombres));
  
  
     }).catch(e => {
       console.log(e);
     })
   }

 
 return(
  <div >
    <div className="centrar">
    <div className="cardEstadisticas centrar">
      <div className="card1">
        <div className="card-body">
          <div className="dropdown">
            <select onChange={handleIdJugadorChange}>
                {jugadores.map(jugador => {
                  return (
                    <option value={jugador}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]} </option>
                  )
                })}
              </select>            
          </div> 
          <br/>
          <div className="centrar">
            <input type="Button" value="Buscar" className="boton"  onClick={obtenerDatos} />
          </div>
          
        </div>
      </div>
    </div>
    </div>

      <table className="tablaEstadisticas">
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
