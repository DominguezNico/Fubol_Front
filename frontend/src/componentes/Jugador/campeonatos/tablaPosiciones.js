import React, { useEffect, useState } from 'react'


function TablaPosiciones (props){

  useEffect(() => {
    CampeonatosDeUnClub();
    clubesCampeonato();
  },[]);

  const [tablaPos,setTablaPos]=useState([])
  const [campeonatos,setCampeonatos]=useState([])
  const [tablaPosOrdenada,setTablaPosOrdenada]=useState([])
  const [cargo,setCargo]=useState(false)


  const CampeonatosDeUnClub = async () =>{
    await fetch(`http://localhost:8080/obtenerCampeonatosDelClub?idClub=${props.location.state.idClub}`)
      .then(response =>response.json())
      .then(response => {

        console.log("Campeonatos")
        console.log(response)

        setCampeonatos(response)
        setCargo(true)

       }).catch(e => console.log(e))    
  }


  const clubesCampeonato = () =>{

      fetch(`http://localhost:8080/obtenerTodaLaTablaPosiciones`)
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

    let aux=[];
    let listFinal=[];
    let cont=0;
    campeonatos.map((d)=>{
      cont=0;
      tablaPos.map((dato)=>{
        if(dato.camp.idCampeonato===d.idCampeonato){
          
          listFinal.push(dato)
          
          if(cont!=0){
            if(listFinal[cont-1].puntos<=listFinal[cont].puntos){
              aux=listFinal[cont-1]
              listFinal[cont-1]=listFinal[cont]
              listFinal[cont]=aux
            }
          }
          cont=cont+1;
        }
      })
    })

    setTablaPosOrdenada(listFinal)
  }

  
  return(    
    <div className="fondo">
    
      {campeonatos.map((d)=> {
          let cont=0;
          
          return(<div> 
            <table>
              <thead>
                <tr>
                  <th>#</th><th>Club</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
                </tr>
              </thead>
              </table>
            {tablaPosOrdenada?.map((dato) => {
              cont=cont+1;
              /*console.log("dato")
              console.log(dato)
              console.log("d")
              console.log(d)*/
              console.log(dato.c.nombre)
              if(dato.camp.idCampeonato===d.idCampeonato){
                return (
          <div >
            <table>
              <tr>
                <td>{cont}</td><td>{dato.c.nombre}</td><td>{dato.cantidadJugados}</td><td>{dato.cantidadganados}</td><td>{dato.cantidadempatados}</td><td>{dato.cantidadperdidos}</td><td>{dato.golesFavor}</td><td>{dato.golesContra}</td><td>{dato.diferenciaGoles}</td><td>{dato.puntos}</td>
              </tr>
            </table>
          
          </div>

        );
              }
        
        
      })}
          <br/>
          <br/>
          </div>);
      
      })}
    </div>
    
  ) 
}


  export default TablaPosiciones;