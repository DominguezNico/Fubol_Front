import React, { useEffect, useState } from 'react'


function Avance (props){

  useEffect(() => {
    cargarAlPrincipio();
  },[]);

  const [datos,setDatos]=useState([])

  const cargarAlPrincipio = async () =>{
 
    
    await fetch(`http://localhost:8080/consultarAvanceClub?idClub=${props.location.state.idClub}`)
      .then(response =>response.json())
      .then(response => {

        console.log(response)

        setDatos(response)

        /*
        setDatos({
          nombreClub: response[0].c.nombre,  
          camp: response[0].camp,  
          cantidadJugados: response[0].cantidadJugados,  
          cantidadempatados: response[0].cantidadempatados,  
          cantidadganados: response[0].cantidadganados,  
          cantidadperdidos: response[0].cantidadperdidos,   
          diferenciaGoles: response[0].diferenciaGoles,   
          golesContra: response[0].golesContra,   
          golesFavor: response[0].golesFavor,    
          promedio: response[0].promedio,   
          puntos: response[0].puntos, 

          
        })*/
       
      })
  
  }
  
  return(    
    <div className="fondo">

      {datos.map((dato) => {
        return (
          <div >
            <div className="d-flex justify-content-center h-100">
              <div className="cardAvanceClub">
                <div className="card-header">
                  <div className="card-body">
                    <div className="container">

                      <h2 className="colorTitulo centrar">{dato.nombreClub}</h2>

                      <p className="colorSubtitulo"><strong>Campeonato:</strong> {dato.camp}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Cantidad de partidos jugados:</strong> {dato.cantidadJugados}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Cantidad de partidos empatados:</strong> {dato.cantidadempatados}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Cantidad de partidos ganados:</strong> {dato.cantidadganados}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Cantidad de partidos perdidos:</strong> {dato.cantidadperdidos}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Diferencia de goles:</strong> {dato.diferenciaGoles}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Goles en contra:</strong> {dato.golesContra}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Goles a favor:</strong> {dato.golesFavor}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Promedio:</strong> {dato.promedio}</p>
                      <br/>
                      <p className="colorSubtitulo"><strong>Puntos:</strong> {dato.puntos}</p>
                      <br/>
                      
                    </div>
                  </div>
                </div> 
              </div> 
            </div> 
          </div>
        );
      })}
    
    </div>
    
  ) 
}


  export default Avance;