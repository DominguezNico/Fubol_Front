import React from 'react'


class  ObtenerPartidos extends React.Component{
  
  
  state = { 
    partidos:[],
    cargando: true 
  }


  componentDidMount(){
    fetch(`https://futbol--back.herokuapp.com/getPartidos`)
    .then(response => response.json())
    .then(data => this.setState({ partidos: data, cargando:false}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }




  render(){
  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Partidos</h1>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
  return(
    <div className="fondo centrar row margen">
  
      <h3 className='colorTituloTabla colorFondoTituloTabla centrar'>Partidos </h3>
      <table className="centrarTabla tamañoTabla2">
              <thead>
                <tr>
                </tr>
                  <th>Club Local</th><th>Club Visitante</th><th>Etapa</th><th>Nro Fecha</th><th>Fecha</th><th>Campeonato</th><th>Goles Local</th><th>Goles Visitante</th>
              </thead>
      {this.state.partidos.map((partido) => {
            return (
              
        
              <tr>
                <td>{partido.clubLocal.nombre}</td><td>{partido.clubVisitante.nombre}</td><td>{partido.etapa}</td><td>{partido.nroFecha}</td><td>{partido.fechaPartido}</td><td>{partido.campeonato.descripcion}</td><td>{partido.golesLocal}</td><td>{partido.golesVisitante}</td>
              </tr>
           
            );
          })}
           </table>
    
    </div>
  )
}
}
}



  export default ObtenerPartidos;
