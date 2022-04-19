import React from 'react';

import '../estilos.css'

class VerGoles extends React.Component {
  
  state = { 
    usuario:{...this.props.usuario},
    goles:[],
    cargando: true 
  }

  
      
  componentDidMount(){
    fetch(`https://futbol--back.herokuapp.com/getGolesJugador?idJugador=${this.state.usuario.id}`)
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
        <h3 className="colorTituloTabla colorFondoTituloTabla centrar">Goles </h3>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
    if(this.state.goles.status===400){
      return(
        <div>
          <h3 className="sinAvance"> No tienes goles que mostrar</h3>
        </div>
      )
    }else{
      return(
        <div>
        <div class="row">
        <h3 className="colorTituloTabla colorFondoTituloTabla centrar">Goles </h3>
    
          {this.state.goles?.map((gol) => {
                const name = `${gol.jugador.apellido} ${gol.jugador.nombre}`;
                return (
                
                  <div className="col pb-2 md-4">
                     
                 
                   <div className="card text ">
                  
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
        </div>
      )
    }
  
}
}
}


  export default VerGoles;