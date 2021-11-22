import React, { useContext, useState, useEffect } from "react";

function CambiarDireccion (){


  const [buscarClubes,setBuscarClubes]=useState('');
  const [clubes,setClubes]=useState([]);
  const [pendiente,setPendiente]=useState(false);

  const [direccion,setDireccion]=useState('');



  useEffect(() => {
    obtenerClubes();
  },[]);


  const handleIdClubChange = (e) => {
    console.log("VALOR "+e.target.value)
    setBuscarClubes(e.target.value);
  }
  

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
    };


    const  obtenerClubes =  async () =>{
      await fetch('http://localhost:8080/obtenerClubes')
       .then(response =>response.json())
       .then(response => {
    
         let nombres=[]
    
    
         response.map(datos => {
           nombres.push([datos.nombre,datos.idClub])
         })
    
    
         setClubes([["Clubes","IdClubes"]].concat(nombres));
    
    
       }).catch(e => {
         console.log(e);
       })
     }


     const cambiarDireccion =   () => {

      if(buscarClubes!="IdPartidos"){
        setPendiente(true);
        
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ })
        };
  
        console.log(requestOptions)
  
        fetch(`http://localhost:8080/modificarDireccionClub?idClub=${buscarClubes}&direccion=${direccion}`, requestOptions )
        .then( () => {
            console.log('Se cambio');
            setPendiente(false)
        })
      }
      
  
    }

  

  return(
    <div className="containerrr3">
       <div className="d-flex justify-content-center h-100">
        <div className="card3">
          <div className="card-header">
          <div className="card-body">
            <form>

              <div className="container">
              <div className="row"> </div>
                <input type="direccion" className="form-control col-20" placeholder="Direccion"  onChange={handleDireccionChange}/>
                <br/>
              </div>


              <div className="dropdown">
                      <select onChange={handleIdClubChange}>
                          {clubes.map(club => {
                            return (
                              <option value={club[1]}> {club[0]} </option>
                            )
                          })}
                        </select>
                        
                  </div> 
                  <br/>

             <br/> 
             <br/> 
             <div className="form-group centrar">
               {!pendiente && <input type="Button" value="Cambiar Direccion " className="boton" onClick={cambiarDireccion} />}
               {pendiente && <input type="Button" value="Cambiando ..." className="boton" onClick={cambiarDireccion} />}
               
                      
             </div>

          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
}


  export default CambiarDireccion;