import React from 'react';

class Avance extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      faltas:[]
     }
}
  

  componentDidMount(){
    fetch('http://localhost:8080/getFaltasJugador?idJugador=17')
    .then(response => response.json())
    .then(data => this.setState({ faltas: data}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }

render(){
  return(
    <div>
  
      <h3>Faltas</h3>

      {this.state.faltas.map((falta) => {
            const name = `${falta.jugador.apellido} ${falta.jugador.nombre}`;
            return (
            
              <div className="col-lg-3 pb-3 md-7">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center">{name}</h5>
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


  export default Avance;