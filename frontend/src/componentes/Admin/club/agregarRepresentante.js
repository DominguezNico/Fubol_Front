import React, { useState } from 'react'


function AgregarRepresentante (){

    const [doc,setDocumento]=useState('');
    const [nom,setNombre]=useState('');
    const [id,setIdClub]=useState('');
    const [pendiente,setPendiente]=useState(false);



    const handleDocumentoChange = (e) => {
        setDocumento(e.target.value);
    };
    
    const handlenombreChange = (e) => {
        setNombre(e.target.value);
    };
    
    const handleIdChange = (e) => {
        setIdClub(e.target.value);
    }


    const agregarRep= () => {
        
        setPendiente(true);
        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ })
        };

        console.log(requestOptions)

        fetch(`http://localhost:8080/agregarResponsable?documento=${doc.toString()}&nombre=${nom}&idClub=${id}`, requestOptions )
        .then( () => {
            console.log('Se agrego el responsable');
            setPendiente(false)
        })
        
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
             <input type="doc" className="form-control col-20" placeholder="Ingrese el documento"  onChange={ handleDocumentoChange }/>
             <br/> 
             <input type="tipo" className="form-control" placeholder="Ingrese el nombre"  onChange={ handlenombreChange }/>
             <br/> 
             <input type="nombre" className="form-control" placeholder="Ingrese el id del club"  onChange={ handleIdChange }/>
             <br/> 
           </div>


           <br/> 
           <br/> 
           <div className="form-group">
             {!pendiente && <input type="Button" value="Registrar representante" className="boton" onClick={agregarRep} />}
             {pendiente && <input type="Button" value="Añadiendo representante..." className="boton" onClick={agregarRep} />}
             
                    
           </div>


       </form>
         </div>
         </div> 
         </div> 
         </div> 
    </div>

  ) 
}


  export default AgregarRepresentante;