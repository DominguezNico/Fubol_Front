import React from 'react'


class  VerRepresentantes extends React.Component{
  
  
  state = { 
    representantes:[],
    cargando: true 
  }


  componentDidMount(){
    fetch(`http://localhost:8080/getResponsables`)
    .then(response => response.json())
    .then(data => this.setState({ representantes: data, cargando:false}) , console.log(this.faltas))
    .catch(error => {
      console.log('Hay un error en la llamada');
    });
  }




  render(){
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
    <div>
   <div className="row">
      <h3>Representantes </h3>

      {this.state.representantes?.map((rep) => {
            const name = `${rep.club.nombre} `;
           
            return (
              
              <div className="col pb-2 md-4">
                 
             
               <div className="card text  ">
              
                 <div className="card-body text-dark">
                    
                    <h5 className="card-title center" className="colorTitulo">{name}</h5>
                    <p className="card-text-right">
                      <strong>Documento: </strong>{rep.etapa}<br/>
                      <strong>Nombre: </strong>{rep.nombre}<br/>
                   
                      
                    </p>

                  </div>

                </div>
                </div>
              

            );
            
          }
          )
         
          }
     </div>
    </div>
  )
}
}
}



  export default VerRepresentantes;