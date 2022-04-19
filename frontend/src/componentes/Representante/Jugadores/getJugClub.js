import React from "react";
import '../../../estilos/estiloRepresentante.css'

class GetJugClub extends React.Component{

state = { 
    usuario:{...this.props.usuario},
    jugadores:[],
    cargando: true 
  }


componentDidMount(){
    console.log("ES ESTE")
    console.log(this.state.usuario.club.idClub)
    fetch(`https://futbol--back.herokuapp.com/getJugadoresClub?idClub=${this.state.usuario.club.idClub}`)
    .then(response => response.json())
    .then(data => this.setState({ jugadores:data, cargando:false}) , console.log(this.state.jugadores))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }

render(){

if(this.state.jugadores.status===400){
  return(
    <div>
      <h3 className="sinAvance"> No hay jugadores que mostrar</h3>
    </div>
  )
}else{
  return(
    <div className="fondo centrar row margen">
      <div>
        <h3 className='colorTituloTabla colorFondoTituloTabla'>Jugadores del club:</h3>
        <table className="centrarTabla tamañoTabla">
              <thead>
                <tr>
                 <th>Id</th><th>Nombre</th><th>Apellido</th><th>Documento</th><th>Fecha de Nacimiento</th>
                </tr>
              </thead>
              {this.state.jugadores?.map(({id, nombre, apellido, documento, fechaNacimiento}) => (
                <tr><td>{id}</td><td>{nombre}</td><td>{apellido}</td><td>{documento}</td><td>{fechaNacimiento}</td></tr>
            ))}
            </table>
      </div>
    </div>
)
}

}
}
export default GetJugClub