import React, { useEffect, useState } from 'react'


import '../../Jugador/estilos.css'

function VerTabla (props){

  useEffect(() => {
    CampeonatosDeUnClub();
    clubesCampeonato();
  },[]);

  const [tablaPos,setTablaPos]=useState([])
  const [campeonatos,setCampeonatos]=useState([])
  const [tablaPosOrdenada,setTablaPosOrdenada]=useState([])
  const [cargo,setCargo]=useState(false)



  const CampeonatosDeUnClub = async () =>{
    await fetch(`https://futbolito-back.herokuapp.com/obtenerCampeonatosDelClub?idClub=${props.location.state.club.idClub}`)
      .then(response =>response.json())
      .then(response => {

        console.log("Campeonatos")
        console.log(response)

        setCampeonatos(response)
        setCargo(true)

       }).catch(e => console.log(e))    
  }


  
  const clubesCampeonato = () =>{

      fetch(`https://futbolito-back.herokuapp.com/obtenerTodaLaTablaPosiciones`)
      .then(response =>response.json())
      .then(response => {

        console.log(response)
        setTablaPos(response)
        setCargo(true)

       }).catch(e => console.log(e))  
  }

  useEffect(()=>{
    if(cargo===true){
      ordenarPosicion();
    }
    
  })

  const ordenarPosicion = () => {

    var listaFinal=[];
    listaFinal=tablaPos;


    listaFinal.sort(function (a, b) {
      if(a.puntos>b.puntos && a.camp.idCampeonato===b.camp.idCampeonato){
        return -1;
      }
      if(a.puntos<b.puntos && a.camp.idCampeonato===b.camp.idCampeonato){
        return 1;
      }
      else{
        return 0;
      }

    })
    
    setTablaPosOrdenada(listaFinal);
    
  }

  if(campeonatos.status===400){
    return(
      <div>
        <h3 className="sinAvance"> No tenes ningun campeonato que mostrar</h3>
      </div>
    )
  }else{
  return(    
    <div className="fondo centrar row">
    
      {campeonatos?.map((d)=> {
        
        let cont=0
          
        return(
          <div>
            <h3 className='colorTituloTabla colorFondoTituloTabla margen'><strong>Campeonato:</strong> {d.descripcion}</h3>
            <table className="centrarTabla tamañoTabla2">
              <thead>
                <tr>
                  <th>#</th><th>Club</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
                </tr>
              </thead>
            
                  {tablaPosOrdenada?.map((dato) => {
                    
                    if(dato.camp.idCampeonato===d.idCampeonato){
                      cont=cont+1
                      return (
                        <tr>
                          <td>{cont}</td><td>{dato.c.nombre}</td><td>{dato.cantidadJugados}</td><td>{dato.cantidadganados}</td><td>{dato.cantidadempatados}</td><td>{dato.cantidadperdidos}</td><td>{dato.golesFavor}</td><td>{dato.golesContra}</td><td>{dato.diferenciaGoles}</td><td>{dato.puntos}</td>
                        </tr>    
                      );
                    }
                  })}
          
            </table>
            <br/>
            <br/>
          </div>
        );        
      })}
    </div>
    
  ) 
    }
}


  export default VerTabla;