import React, { useEffect, useState } from 'react'


function TablaPosiciones (props){

  useEffect(() => {
    cargarAlPrincipio();
    CampeonatosDeUnClub();
  },[]);

  const [datos,setDatos]=useState([])
  const [campeonatos,setCampeonatos]=useState([])

  console.log(props.location.state)

  const CampeonatosDeUnClub = async () =>{
    await fetch(`http://localhost:8080/obtenerCampeonatosDelClub?idClub=${props.location.state.idClub}`)
      .then(response =>response.json())
      .then(response => {

        console.log(response)

       }).catch(e => console.log(e))    
  }

  const clubesCampeonato = async () =>{
    await fetch(`http://localhost:8080/clubesCampeonato?idCampeonato=${props.location.state.idClub}`)
      .then(response =>response.json())
      .then(response => {

        setDatos(response)

       }).catch(e => console.log(e))  
  }
  

  const cargarAlPrincipio = async () =>{
 
    
    await fetch(`http://localhost:8080/consultarAvanceClub?idClub=${props.location.state.idClub}`)
      .then(response =>response.json())
      .then(response => {

        setDatos(response)

       }).catch(e => console.log(e))     
  
  }
  
  return(    
    <div className="fondo">

      {datos.map((dato) => {
        return (
          <div >
            <table>
              <thead>
                <tr>
                  <th>#</th><th>Club</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
                </tr>
              </thead>

              <tr>
                <td>1</td><td>Racing</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
              </tr>
              <tr>
                <td>2</td><td>Boca Juniors</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
              </tr>
              <tr>
                <td>3</td><td>River</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
              </tr>
              <tr>
                <td>4</td><td>Estudiantes</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
              </tr>
            </table>
          <br/>
          <br/>
          </div>

        );
      })}
    
    </div>
    
  ) 
}


  export default TablaPosiciones;