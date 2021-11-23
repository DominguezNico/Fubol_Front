import React, { useContext, useState, useEffect } from "react";

function AgregarJugador (props){


  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);

  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);

  
  const [pendiente,setPendiente]=useState(false);



  useEffect(() => {
  
    obtenerJugadores();
    obtenerPartidos();
  },[]);


  const handleIdPartidoChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarPartidos(e.target.value);
}

const handleIdJugadorChange = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarJugador(e.target.value);
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
  await fetch(`http://localhost:8080/getJugadoresClub?idClub=${props.location.state.club.idClub}`)
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
  if(buscarJugador!="IdJugador" ){
    setPendiente(true);
    

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ })
    };

    console.log(requestOptions)

     fetch(`http://localhost:8080/agregarJugadorPartido?idClub=${props.location.state.club.idClub}&idPartido=${buscarPartidos}&idJugador=${buscarJugador}`, requestOptions )
    .then( () => {
        console.log('Se incribio');
         setPendiente(false)
    })
  }
}


return(
  <div className="containerrr3">
   <div className="d-flex justify-content-center h-100">
    <div className="card10">
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