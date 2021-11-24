import React, { useEffect, useState } from 'react'
import '../../../estilos/estiloAdmin.css'

function GenerarPartidos (){

  const [nroFecha,setFecha]=useState('');
  const [nroZona,setZona]=useState('');
  const [fechaPart,setFechaPartido]=useState('');
  const [categoria,setCategoria]=useState('');
  const [etapa,setEtapa]=useState('');

  const [buscarClubes,setBuscarClubes]=useState('');
  const [clubes,setClubes]=useState([]);

  const [buscarClubesVisitantes,setBuscarClubesVisitantes]=useState('');
  const [clubesV,setClubesV]=useState([]);

  const [buscarCampeonatos,setBuscarCampeonatos]=useState('');
  const [campeonatos,setCampeonatos]=useState([]);

  const [pendiente,setPendiente]=useState(false);


  useEffect(() => {
    obtenerClubes();
    obtenerClubesVisitantes();
    obtenerCampeonatos();
  },[]);


  const cambiarNumFecha = (e) => {
    setFecha(e.target.value);
};
const cambiarEtapa = (e) => {
  setEtapa(e.target.value);
};

const cambiarCateg = (e) => {
  setCategoria(e.target.value);
};

const cambiarZona = (e) => {
  setZona(e.target.value);
};

const cambiarFecha = (e) => {
  setFechaPartido(e.target.value);
};


const cambiarClubes = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarClubes(e.target.value);
}


const cambiarClubesVisitantes = (e) => {
  console.log("VALOR "+e.target.value)
  setBuscarClubesVisitantes(e.target.value);
}

const cambiarCampeonato = (e) => {
  console.log("VALOR: "+e.target.value)
  setBuscarCampeonatos(e.target.value);
}


const  obtenerClubes =  async () =>{
  await fetch('http://localhost:8080/obtenerClubes')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response?.map(datos => {
       nombres.push([datos.nombre,datos.idClub])
     })


     setClubes([["Club Local","Id Club L"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }




 const  obtenerClubesVisitantes =  async () =>{
  await fetch('http://localhost:8080/obtenerClubes')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response?.map(datos => {
       nombres.push([datos.nombre,datos.idClub])
     })


     setClubesV([["Club Visitante","IdClub V"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }




 const  obtenerCampeonatos =  async () =>{
  await fetch('http://localhost:8080/obtenerCampeonatos')
   .then(response =>response.json())
   .then(response => {

     let nombres=[]


     response?.map(datos => {
       nombres.push([datos.descripcion,datos.idCampeonato])
     })


     setCampeonatos([["Campeonatos","IdCampeonatos"]].concat(nombres));


   }).catch(e => {
     console.log(e);
   })
 }






 const crearPartido= () => {
      
  if(buscarClubes!="IdClubes"){
    setPendiente(true);
    

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ })
    };

    console.log(requestOptions)
      
    fetch(`http://localhost:8080/agregarPartido?nroFecha=${nroFecha}&nroZona=${nroZona}&categoria=${categoria}&idClubLocal=${buscarClubes}&idClubVisitante=${buscarClubesVisitantes}&fechaPartido=${fechaPart}&idCampeonato=${buscarCampeonatos}&etapa=${etapa}`, requestOptions )
    .then( () => {
        console.log('Se agrego ');
        setPendiente(false)
    })
  }
  
    
 }




  return(
     <div className="containerrr3">
       <div className="d-flex justify-content-center h-150">
        <div className="card5">
          <div className="card-header">
          <div className="card-body">
            <form>

              <div className="container">
                <div className="row"> </div>
                <input type="Nº Fecha" className="form-control col-20" placeholder="Nº Fecha"  onChange={cambiarNumFecha}/>
                <br/>
                <input type="Nº Zona" className="form-control col-20" placeholder="Nº Zona"  onChange={cambiarZona}/>
                <br/>
                <input type="Fecha Partido" className="form-control col-20" placeholder="Fecha Partido"  onChange={cambiarFecha}/>
                <br/>
                <input type="Categoria " className="form-control col-20" placeholder="Categoria"  onChange={cambiarCateg}/>
                <br/>
                <input type="Etapa " className="form-control col-20" placeholder="Etapa"  onChange={cambiarEtapa}/>
                <br/>


                <div className="dropdown">
                     <select onChange={cambiarClubes}>
                        {clubes?.map(club => {
                            return (
                              <option value={club[1]}> {club[0]} </option>
                            )
                          })}
                      </select>
                 </div>
                <br/>

                <div className="dropdown">
                      <select onChange={cambiarClubesVisitantes}>
                          {clubesV?.map(clubV => {
                            console.log(clubV)
                            return (
                              <option value={clubV[1]}> {clubV[0]} </option>
                            )
                          })}
                        </select>
                        
                </div> 
                <br/>

                <div className="dropdown">
                      <select onChange={cambiarCampeonato}>
                          {campeonatos?.map(camp => {
                            console.log(camp)
                            return (
                              <option value={camp[1]}> {camp[0]} </option>
                            )
                          })}
                        </select>
                        
                </div> 
                <br/>
                </div>

              <br/> 
              <div className="form-group centrar">
              {!pendiente && <input type="Button" value="Crear Partido " className="boton" onClick={crearPartido} />}
              {pendiente && <input type="Button" value="Creando ..." className="boton" onClick={crearPartido} />}
  
 
           </div>
          </form>
</div>
</div>
</div>
</div>
</div>
)
















  
}


  export default GenerarPartidos;