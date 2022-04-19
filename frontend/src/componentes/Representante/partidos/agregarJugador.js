import React, { useContext, useState, useEffect } from "react";

function AgregarJugador (props){


  const [buscarPartidos,setBuscarPartidos]=useState('');
  const [partidos,setPartidos]=useState([]);

  const [buscarJugador,setBuscarJugador]=useState('');
  const [jugadores,setJugadores]=useState([]);

  
  const [pendiente,setPendiente]=useState(false);
  const [check,setCheck]=useState("")



  useEffect(() => {
  
    obtenerJugadores();
    obtenerPartidos();
  },[]);


  const handleIdPartidoChange = (e) => {
    setBuscarPartidos(e.target.value);
}

const handleIdJugadorChange = (e) => {
  setBuscarJugador(e.target.value);
}





const  obtenerPartidos =  async () =>{
  await fetch(`https://futbol--back.herokuapp.com/getPartidosClub?idClub=${props.location.state.club.idClub}`)
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
  await fetch(`https://futbol--back.herokuapp.com/getJugadoresHabilitadosClub?idClub=${props.location.state.club.idClub}`)
   .then(response =>response.json())
   .then(response => {

     let nombres=[]
     response?.map(datos => {
      nombres.push([datos.nombre,datos.apellido,datos.documento,datos.id])
     })


     setJugadores([["Nombre","Apellido","X"]].concat(nombres));


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


     fetch(`https://futbol--back.herokuapp.com/agregarJugadorPartido?idClub=${props.location.state.club.idClub}&idPartido=${buscarPartidos}&idJugador=${buscarJugador}`, requestOptions )
     .then(response => response.json())
     .then((data) => {
      console.log("data") 
      console.log(data)
       setCheck(data)
       setPendiente(false)
      
      })
  }
}


useEffect(() => {
  if(check==1){
    errorDeCarga()
  }

},[check])

const errorDeCarga = () => {
  alert("No se puede agregar este jugador a este partido")
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
                    {partidos?.map(partido => {
                      console.log("partido")
                          console.log(partido)
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
                        return (
                          <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]} </option>
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
