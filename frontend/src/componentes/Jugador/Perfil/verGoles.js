import React from 'react';

import '../estilos.css'

class VerGoles extends React.Component {
  
  state = { 
    usuario:{...this.props.usuario},
    goles:[],
    cargando: true 
  }

  
      
  componentDidMount(){
    fetch(`http://localhost:8080/getGolesJugador?idJugador=${this.state.usuario.id}`)
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
          <h3>Goles </h3>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
  return(
    <div>
  
      <h3>Goles </h3>

      {this.state.goles.map((gol) => {
            const name = `${gol.jugador.apellido} ${gol.jugador.nombre}`;
            return (
            
              <div className="col-lg-3 pb-3 md-7">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center" className="colorTitulo">{name}</h5>
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