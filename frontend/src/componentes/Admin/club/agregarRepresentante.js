import React, { useEffect, useState } from 'react'


function AgregarRepresentante (){

    const [doc,setDocumento]=useState('');
    const [nom,setNombre]=useState('');
    const [buscarClubes,setBuscarClubes]=useState('');
    const [clubes,setClubes]=useState([]);
    const [pendiente,setPendiente]=useState(false);

    const [clubValido,setClubValido]=useState(false);

    useEffect(() => {
      obtenerClubes();
    },[]);


    const handleDocumentoChange = (e) => {
        setDocumento(e.target.value);
    };
    
    const handlenombreChange = (e) => {
        setNombre(e.target.value);
    };
    
    
    const handleIdChange = (e) => {
        console.log("VALOR "+e.target.value)
        setBuscarClubes(e.target.value);
    }


    


    const  obtenerClubes =  async () =>{
     await fetch('http://localhost:8080/obtenerClubes')
      .then(response =>response.json())
      .then(response => {

        let nombres=[]


        response?.map(datos => {
          nombres.push([datos.nombre,datos.idClub])
        })


        setClubes([["Clubes","IdClubes"]].concat(nombres));


      }).catch(e => {
        console.log(e);
      })
    }


    const agregarRep= () => {
      
      if(buscarClubes!="IdClubes"){
        setPendiente(true);
        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ })
        };

        console.log(requestOptions)

        fetch(`http://localhost:8080/agregarResponsable?documento=${doc.toString()}&nombre=${nom}&idClub=${buscarClubes}`, requestOptions )
        .then( () => {
            console.log('Se agrego el responsable');
            setPendiente(false)
        })
      }
      
        
        
     }

  return(
    <div className="containerrr3">
    <div className="d-flex justify-content-center h-100">
     <div className="card4">
       <div className="card-header">
       <div className="card-body">
         <form>



           <div className="container">
             <div className="row"> </div>
             <input type="doc" className="form-control " placeholder="Documento del representante"  onChange={ handleDocumentoChange }/>
             <br/> 
             <input type="tipo" className="form-control" placeholder="Nombre del representante"  onChange={ handlenombreChange }/>
             <br/> 
              
             <div className="dropdown">
                        
              <select onChange={handleIdChange}>
                {clubes?.map(club => {
                  return (
                    <option value={club[1]}> {club[0]} </option>
                  )
                })}
              </select>
              
            </div> 
             <br/> 
           </div>


           <br/> 
           <br/> 
           <div className="form-group centrar">
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