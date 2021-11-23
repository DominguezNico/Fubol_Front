import React, { useContext, useState, useEffect } from "react";

function CambiarDireccion (props){


 
  const [pendiente,setPendiente]=useState(false);
  const [direccion,setDireccion]=useState('');




  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
    };


    
     const cambiarDireccion =   () => {
        setPendiente(true);
        
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ })
        };
  
        console.log(requestOptions)
  
        fetch(`http://localhost:8080/modificarDireccionClub?idClub=${props.location.state.club.idClub}&direccion=${direccion}`, requestOptions )
        .then( () => {
            console.log('Se cambio');
            setPendiente(false)
        })
      
      
  
    }

  

  return(
    <div className="containerrr3">
       <div className="d-flex justify-content-center h-100">
        <div className="card8">
          <div className="card-header">
          <div className="card-body">
            <form>

              <div className="container">
              <div className="row"> </div>
                <input type="direccion" className="form-control col-20" placeholder="Direccion"  onChange={handleDireccionChange}/>
                <br/>
              </div> 
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