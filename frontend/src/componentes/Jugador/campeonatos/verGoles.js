import React from 'react';

import '../estilos.css'

class VerGoles extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      goles:[],
      cargando: true 
     }
}
  

  componentDidMount(){
    fetch('http://localhost:8080/getGolesJugador?idJugador=1034')
    .then(response => response.json())
    .then(data => this.setState({ goles: data  , cargando:false}))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }

render(){
  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goles</h1>
        </header>
        <div>
          <p>cargando...</p>
        </div> 
      </div> 
    )
  }else{
  return(
    <div>
  
      <h1 className="App-title">Goles</h1>

      {this.state.goles.map((gol) => {
            const name = `${gol.jugador.apellido} ${gol.jugador.nombre}`;
            return (
            
              <div className="col-lg-3 pb-3 md-7">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center" id="colorTitulo">{name}</h5>
                    <p className="card-text-right">
                      <strong>Tipo: </strong>{gol.tipo}<br/>
                      <strong>Minuto: </strong>{gol.minuto}<br/>
                      <strong>nro de fecha: </strong>{gol.partido.nroFecha}<br/>
                      <strong>Campeonato: </strong>{gol.partido.campeonato.descripcion}<br/>
                    </p>

                  </div>

                </div>
                </div>
              

            );
          })}
    
    </div>
  )
}
}
}


  export default VerGoles;