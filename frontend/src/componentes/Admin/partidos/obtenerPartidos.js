import React from 'react'


class  ObtenerPartidos extends React.Component{
  
  
  state = { 
    partidos:[],
    cargando: true 
  }


  componentDidMount(){
    fetch(`http://localhost:8080/getPartidos`)
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
    <div>
  
      <h3>Partidos </h3>

      {this.state.partidos.map((partido) => {
            const name = `${partido.clubLocal.nombre} -  ${partido.clubVisitante.nombre}`;
            return (
            
              <div className="col-lg-3 pb-3 md-7">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center" className="colorTitulo">{name}</h5>
                    <p className="card-text-right">
                      <strong>Etapa: </strong>{partido.etapa}<br/>
                      <strong>Nro Fecha: </strong>{partido.nroFecha}<br/>
                      <strong>Fecha: </strong>{partido.fechaPartido}<br/>
                      
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



  export default ObtenerPartidos;