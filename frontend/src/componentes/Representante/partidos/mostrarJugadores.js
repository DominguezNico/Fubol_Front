import React, { useContext, useState, useEffect } from "react";


function MostrarJugador (){

  const [partidos,setPartidos]=useState([]);
  const [buscarPartidos,setBuscarPartidos]=useState('');

  const [nombreClubLocal, setNombreLocal] = useState([]);
  const [jugadoresLocales,setJugadoresLocales] = useState([]);
  const [jugadoresVisitantes, setJugadoresVisitantes] = useState([]);
  
  
  useEffect(() => {
    obtenerPartidos();
  },[]);

  const  obtenerPartidos =  async () =>{
    await fetch('http://localhost:8080/getPartidos')
     .then(response =>response.json())
     .then(response => {

       let nombres=[]


       response.map(datos => {
         nombres.push([datos.nroFecha,datos.clubLocal.nombre, datos.clubVisitante.nombre,datos.id])
       })

       
       setPartidos(nombres);


     }).catch(e => {
       console.log(e);
     })
   }

   const handleIdChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}

 /* const getPartido =  async () => {
  await fetch(`http://localhost:8080/getPartido?idPartido=${buscarPartidos}`)
  .then(response => response.json())
  .then(data => [setIdLocal(data.clubLocal.idClub), setNombreLocal(data.clubLocal.nombre), setIdVisitante(data.clubVisitante.idClub), setNombreVisitante(data.clubVisitante.nombre)])
}*/

    const verJugadores = async  () => {
        await fetch(`http://localhost:8080/getJugadoresLocales?idPartido=${buscarPartidos}`)
        .then(response =>response.json())
        .then(response => {
        let jugadores=[]
        response?.map(datos => {
          jugadores.push([datos.jugador.id, datos.jugador.nombre, datos.jugador.apellido,datos.jugador.documento, datos.club.nombre])
        })
        setJugadoresLocales(jugadores)
        
      })
      await fetch(`http://localhost:8080/getJugadoresVisitantes?idPartido=${buscarPartidos}`)
      .then(response =>response.json())
      .then(response => {
      let jugadoresV=[]
      response?.map(datos => {
        jugadoresV.push([datos.jugador.id, datos.jugador.nombre, datos.jugador.apellido,datos.jugador.documento, datos.club.nombre])
      })
      setJugadoresVisitantes(jugadoresV)
      })
    }
      
  

  return(
    <div className="containerrr4">
       <div className="d-flex justify-content-center h-100">
        <div className="card5">
          <div className="card-header">
          <div className="card-body">
          <div className="dropdown">
                       <select onChange={handleIdChange}>
                          {partidos.map(partido => {
                            return (
                              <option value={partido[3]}> {'Fecha: '+partido[0]+' - '+partido[1]+' vs '+partido[2]} </option>
                            )
                          })}
                        </select>
              
              </div> 
            <form>
            <br/>
             <div className="form-group centrar">
               {<input type="Button" value="Ver jugadores " className="boton" onClick={verJugadores} />}
                  
             </div>

          </form>
          </div>  
          </div>
        </div>
        </div>
         <div>
          <table>
              <thead>
                <tr>
                 <th>Id</th><th>Nombre</th><th>Apellido</th><th>Documento</th><th>Club</th>
                </tr>
              </thead>
              {jugadoresLocales.map((jugador) => (
                <tr><td>{jugador[0]}</td><td>{jugador[1]}</td><td>{jugador[2]}</td><td>{jugador[3]}</td><td>{jugador[4]}</td></tr>
            ))}
            
            </table>
            </div> 
            </div> 
           
  ) 
}


  export default MostrarJugador;
