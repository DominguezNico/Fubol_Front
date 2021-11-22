import React from 'react'


class  CrearEstadisticas extends React.Component{
  
  
  state = { 
    listas:[],
    cargando: true 
  }


  componentDidMount(){
    fetch(`http://localhost:8080/confeccionEsta?idClub=1`)
    .then(response => response.json())
    .then(data => this.setState({ listas: data, cargando:false}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }




  render(){
  if(this.state.cargando){
    return(

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Estadisticas</h1>
        </header>
        <div>
          <p>...</p>
        </div> 
      </div> 
    )
  }else{
  return(
    <div>
      <h3>Estadisticas </h3>
      {this.state.listas.map((partido) => {
            
            return (
            
              <div className="col-lg-3 pb-3 md-7">
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <p className="card-text-right">
                      <strong> </strong>{partido}<br/>
                     
                      
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



  export default CrearEstadisticas;