import React, { useContext, useState, useEffect } from "react";


class  VerPlanilla extends React.Component{
  
  
  state = { 
    partidos:[],
    cargando: true,
    validoLocal: 0,
    validoVisitante: 0
  }

  componentDidMount(){
    fetch(`http://localhost:8080/getPartidosPendientes`)
    .then(response => response.json())
    .then(data => this.setState({ partidos: data, cargando:false}) , console.log(this.partidos))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }




  render(){
    if(this.state.cargando){
      return(
  
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Partidos pendientes de confirmación</h1>
          </header>
          <div>
            <p>...</p>
          </div> 
        </div> 
      )
    }else{
    return(
      <div className="fondo centrar row margen">
    
        <h3 className='colorTituloTabla colorFondoTituloTabla'>Partidos </h3>
        <table className="centrarTabla tamañoTabla2">
                <thead>
                  <tr>
                  </tr>
                    <th>Club Local</th><th>Club Visitante</th><th>Etapa</th><th>Nro Fecha</th><th>Fecha</th><th>Campeonato</th><th>Validado Local</th><th>Validado Visitante</th>
                </thead>
        {this.state.partidos.map((partido) => {
          console.log("partido")
          console.log(partido)
          let local;
          let visitante;

          if(partido.convalidaLocal){
            local="Si"
          }else{
            local='No'
          }
          if(partido.convalidaVisitante){
            visitante="Si"
          }else{
            visitante="No"
          }
              return (
                
          
                <tr>
                
                  <td>{partido.clubLocal.nombre}</td><td>{partido.clubVisitante.nombre}</td><td>{partido.etapa}</td><td>{partido.nroFecha}</td><td>{partido.fechaPartido}</td><td>{partido.campeonato.descripcion}</td><td>{local}</td><td>{visitante}</td>
                </tr>
             
              );
            })}
             </table>
      
      </div>
    )
  }
  }
  }
  


  export default VerPlanilla;