import React, { useContext, useState, useEffect } from "react";


function  VerPlanilla (props) {

  console.log(props.location.state)
  
  useEffect(() => {
    getPartidosPendientes();
  },[]);

  const [partidos,setPartidos]=useState([]);

  const getPartidosPendientes= async() => {
    await fetch(`http://localhost:8080/getPartidosPendientesClub?idClub=${props.location.state.club.idClub}`)
    .then(response =>response.json())
    .then(response => {

      let nombres=[]


      response?.map(datos => {
       nombres.push([datos.nroFecha,datos.clubLocal.nombre, datos.clubVisitante.nombre,datos.campeonato.descripcion,datos.golesLocal,datos.golesVisitante,datos.id])
      })

      
      setPartidos(nombres);


    }).catch(e => {
      console.log(e);
    })
  }

  const validar =   (idPart) => {

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ })
      };

      console.log(requestOptions)

      fetch(`http://localhost:8080/validarPartido?idPartido=${idPart}&idRepresentante=${props.location.state.legajo}`, requestOptions )
      .then( () => {
          console.log('Se agrego el responsable');
          alert("Se validaron los datos del partido")
              })

  }


 /* if(this.state.partidos.status===400){
    return(
      <div>
        <h3 className="sinAvance"> No tenes ninguna planilla que mostrar</h3>
      </div>
    )
  }else{

  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Planilla Finalizacion Partidos</h1>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{*/
  return(
    <div>
  
      <h1>Partidos </h1>
      <table className="Partidos">
              <thead>
                <tr>
                </tr>
                  <th>Fecha</th><th>Club Local</th><th>Club Visitante</th><th>Campeonato</th><th>Goles Local</th><th>Goles Visitante</th><th>Validar</th>
              </thead>
      {partidos.map((partido) => {
          console.log(partido)
            return (
              
        
              <tr>
                <td>{partido[0]}</td><td>{partido[1]}</td><td>{partido[2]}</td><td>{partido[3]}</td><td>{partido[4]}</td><td>{partido[5]}</td><td><input type="Button" value="Validar" className="boton" onClick={()=>validar(partido[6])}/></td>
              </tr>
           
            );
          })}
           </table>

           
    
    </div>
  )
}
/*}
  }
*/


  export default VerPlanilla;