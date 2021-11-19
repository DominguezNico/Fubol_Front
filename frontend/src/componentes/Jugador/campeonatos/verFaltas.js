import React from 'react';

import '../estilos.css'

class VerFaltas extends React.Component {

    state = { 
      usuario:{...this.props.usuario},
      faltas:[],
      cargando: true 
     }

  

  componentDidMount(){
    fetch(`http://localhost:8080/getFaltasJugador?idJugador=${this.state.usuario.id}`)
    .then(response => response.json())
    .then(data => this.setState({ faltas: data, cargando:false}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }

render(){
  console.log('es este')
  console.log(this.state.usuario.id)
  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Faltas</h1>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
  return(
    <div>
  
      <h3>Faltas </h3>

      {this.state.faltas.map((falta) => {
            const name = `${falta.jugador.apellido} ${falta.jugador.nombre}`;
            return (
            
              <div className="col-lg-3 pb-3 md-7">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center" id="colorTitulo">{name}</h5>
                    <p className="card-text-right">
                      <strong>Tipo: </strong>{falta.tipo}<br/>
                      <strong>Minuto: </strong>{falta.minuto}<br/>
                      <strong>Campeonato: </strong>{falta.partido.campeonato.descripcion}<br/>
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


  export default VerFaltas;