import React from 'react'
import "../../../estilos/estiloRepresentante.css"

class  VerRepresentantes extends React.Component{
  
  
  state = { 
    representantes:[],
    cargando: true 
  }


  componentDidMount(){
    fetch(`https://futbol--back.herokuapp.com/getResponsables`)
    .then(response => response.json())
    .then(data => this.setState({ representantes: data, cargando:false}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }




  render(){
  if(this.state.representantes.status===400){
    return(
      <div>
        <h3 className="sinAvance"> No tenes ningun representante que mostrar</h3>
      </div>
    )
  }else{
  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Representantes</h1>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
    return(
      <div className="container">
        <div className="row">
          <h3 className="colorTituloTabla colorFondoTituloTabla centrar margen">Representantes </h3>
  
          {this.state.representantes?.map((rep) => {
                const name = `${rep.club.nombre}`;
                return (
                
                
              
                  <div className="col pb-2 md-4">
                    
                
                  <div className="card text">
                  
                    <div className="card-body text-dark ">
                        
                        <h5 className="card-title center" className="colorTitulo">{name}</h5>
                        <p className="card-text-right">
                          <strong>Documento: </strong>{rep.documento}<br/>
                          <strong>Nombre: </strong>{rep.nombre}<br/>
                          <br/>
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



  export default VerRepresentantes;