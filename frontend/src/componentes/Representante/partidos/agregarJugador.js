import React, { useContext, useState, useEffect } from "react";

function AgregarJugador (){


  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);

  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);

  const [buscarClubes,setBuscarClubes]=useState('');
  const [clubes,setClubes]=useState([]);
  const [pendiente,setPendiente]=useState(false);



  useEffect(() => {
    obtenerClubes();
    obtenerJugadores();
    obtenerPartidos();
  },[]);


  const handleIdClubChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarClubes(e.target.value);
  }
  const handleIdPartidoChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}

const handleIdJugadorChange = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarJugador(e.target.value);
}



const  obtenerClubes =  async () =>{
  await fetch('http://localhost:8080/obtenerClubes')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response.map(datos => {
       nombres.push([datos.nombre,datos.idClub])
     })


     setClubes([["Clubes","IdClubes"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }



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





 const agregar =   () => {
  if(buscarClubes!="IdClubes" ){
    setPendiente(true);
    

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ })
    };

    console.log(requestOptions)

     fetch(`http://localhost:8080/agregarJugadorPartido?idClub=${buscarClubes}&idPartido=${buscarPartidos}&idJugador=${buscarJugador}`, requestOptions )
    .then( () => {
        console.log('Se incribio');
         setPendiente(false)
    })
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
                      <select onChange={handleIdClubChange}>
                          {clubes.map(club => {
                            return (
                              <option value={club[1]}> {club[0]} </option>
                            )
                          })}
                        </select>
                        
                  </div> 
                  <br/>
        </div>

       <br/> 
       <div className="form-group centrar">
       {!pendiente && <input type="Button" value="Agregar Jugador" className="boton" onClick={agregar} />}
         {pendiente && <input type="Button" value="Agregando..." className="boton" onClick={agregar} />}
         
        
        </div>

      </form>

      </div>

    </div>
  </div>
  </div>
  </div>
)
}


export default AgregarJugador;