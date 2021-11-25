import React, { useEffect, useState } from 'react'


function VerAvance (props){

  useEffect(() => {
    cargarAlPrincipio();
  },[]);

  

  const [datos,setDatos]=useState([])


  const cargarAlPrincipio = async () =>{   
    await fetch(`http://localhost:8080/consultarAvanceClub?idClub=${props.location.state.club.idClub}`)
      .then(response =>response.json())
      .then(response => {

        setDatos(response)
        console.log(datos)
      })
  
  }
  if(datos.status===400){
    return(
      <div>
        <h3 className="sinAvance"> No tienes ningun avance que mostrar</h3>
      </div>
    )
  }else{
  return(    
    <div className="container">    
          <div >
            <h1>Avance del Club</h1>
            <table className="centrarTabla">
              <thead>
                <tr>
                  <th>Campeonato</th><th>Club</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
                </tr>
              </thead>
              {datos.map((dato) => {
              <tr>
                <td>{dato.camp.descripcion}</td><td>{dato.c.nombre}</td><td>{dato.cantidadJugados}</td><td>{dato.cantidadganados}</td><td>{dato.cantidadempatados}</td><td>{dato.cantidadperdidos}</td><td>{dato.golesFavor}</td><td>{dato.golesContra}</td><td>{dato.diferenciaGoles}</td><td>{dato.puntos}</td>
              </tr>
              })}
            </table>
          <br/>
          <br/>
          </div>
    </div>
    
  ) 
    }
}


  export default VerAvance;
