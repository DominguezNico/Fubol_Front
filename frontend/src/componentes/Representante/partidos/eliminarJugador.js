import React, { useContext, useState, useEffect } from "react";


function Deshabilitar(props){
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
  await fetch(`http://localhost:8080/getPartidosClub?idClub=${props.location.state.club.idClub}`)
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




 const  obtenerJugadores =  async () =>{
  await fetch(`http://localhost:8080/getJugadoresClub?idClub=${props.location.state.club.idClub}`)
   .then(response =>response.json())
   .then(response => {

     let nombres=[]
     console.log("RESULTA")
    console.log(response)
     response?.map(datos => {
      nombres.push([datos.nombre,datos.apellido,datos.documento,datos.id])
     })


     setJugadores([["Nombre","Apellido","X"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }
      


       const eliminar =   () => {
      
        if(buscarJugador!="IdJugadores"){
          setPendiente(true);
          
    
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({ })
          };
    
          console.log(requestOptions)
         
          fetch(`http://localhost:8080/BajaJugadorPartido?clubAux=${props.location.state.club.idClub}&partidoAux=${buscarPartidos}&jugadorAux=${buscarJugador}`, requestOptions )
          .then( () => {
              console.log('Se elimino del partido al  jugador');
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
                 
            
                <br/>
                <div className="dropdown">
                 <select onChange={handleIdPartidoChange}>
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
                          {jugadores.map(jugador => {
                            console.log(jugador)
                            return (
                              <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]} </option> 
                            )
                          })}
                        </select>
                        
                </div> 
          

            </div>

           <br/> 
           <div className="form-group centrar">
           {!pendiente && <input type="Button" value="Eliminar del Partido " className="boton" onClick={eliminar} />}
             {pendiente && <input type="Button" value=" Eliminando ..." className="boton" onClick={eliminar} />}
                         
           </div>
          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
}

export default Deshabilitar
