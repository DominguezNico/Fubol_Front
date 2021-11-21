import React, { useEffect, useState } from 'react'

import '../estilos.css'

function ModificarDatosPersonales (props){

  useEffect(() => {
    cargarAlPrincipio();
  },[]);
 
  
  const [pendiente,setPendiente]=useState(false)
  const [datosPersonales,setDatosPersonales]=useState({})
  const [tel,setTel]=useState("")
  const [direc,setdirec]=useState("")
  const [mail,setMail]=useState("")

  const [mostarTel,setMostarTel]=useState("")
  const [mostarDirec,setMostarDirec]=useState("")
  const [mostarMail,setMostarMail]=useState("")
  

  const cargarAlPrincipio = async () =>{
    await fetch(`http://localhost:8080/getJugador?idJugador=${props.location.state.id}`)
      .then(response =>response.json())
      .then(response => {
        
        setDatosPersonales({
          documento: response.documento,
          nombre: response.nombre,
          apellido: response.apellido,
          fechaNacimiento: response.fechaNacimiento,
          tipoDoc: response.tipoDoc,
          id: response.id,
          direccion: response.direccion, 
          email: response.mail, 
          telefono: response.telefono, 
          estadoJugador: response.estadoJugador
        })
    
        setMostarTel(response.telefono)
        setMostarDirec(response.direccion)
        setMostarMail(response.mail)
       
      })
  
  }

  console.log(datosPersonales)

  const handlesetTelChange = (e) => {
    setTel(e.target.value);
    };

  const handlesetDirecChange = (e) => {
    setdirec(e.target.value);
    };

  const handlesetMailChange = (e) => {
    setMail(e.target.value);
    };

  
  const cambios = async () => {
    setPendiente(true);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ })
  };
    
    if(!(tel==='')){
      setMostarTel(tel)
      await fetch(`http://localhost:8080/cambiarTelefonoJugador?id=${datosPersonales.id}&telefono=${tel}`,requestOptions)
      .then(()=>{setPendiente(false)}
      )
    }
    
    if(!(direc==='')){
      setMostarDirec(direc)
      await fetch(`http://localhost:8080/cambiarMailJugador?id=${datosPersonales.id}&mail=${direc}`,requestOptions)
      .then(()=>{setPendiente(false)}
      )
    }
    if(!(mail==='')){
      setMostarMail(mail)
      await fetch(`http://localhost:8080/cambiarDireccionJugador?idJugador=${datosPersonales.id}&direc=${mail}`,requestOptions)
      .then(()=>{setPendiente(false)}
      )
    }
    
  }


  return(
    <div className="containerrr3">
    <div className="d-flex justify-content-center h-100">
     <div className="cardPerfil">
       <div className="card-header">
       <div className="card-body">
         <form>



           <div className="container">
             <div className="row"> </div>
            
              <h2 className="colorTitulo">{datosPersonales.nombre} {datosPersonales.apellido}</h2>

              <p className="colorSubtitulo"><strong>Dirección:</strong> {mostarDirec}</p>
              <br/>
              <p className="colorSubtitulo"><strong>Teléfono:</strong>{mostarTel}</p>
              <br/>
              <p className="colorSubtitulo" ><strong>Mail:</strong> {mostarMail}</p>
              <br/>
              <p className="colorSubtitulo" ><strong>Estado:</strong> {datosPersonales.estadoJugador}</p>
              <br/>
              <br/>
              

             <input type="tipo" className="form-control" placeholder="Cambiar direccion"  onChange={handlesetMailChange}/>
             <br/>
             <input type="doc" className="form-control " placeholder="Cambiar teléfono" onChange={handlesetTelChange}  />
             <br/> 
             <input type="tipo" className="form-control" placeholder="Cambiar mail" onChange={handlesetDirecChange}/>
             <br/> 
            

             <br/> 
           </div>



           <div className="form-group centrar">
             {!pendiente && <input type="Button" value="Registrar cambios" className="boton" onClick={cambios} />}
             {pendiente && <input type="Button" value="Registrando cambios..." className="boton"  onClick={cambios}/>}
             
                    
           </div>


       </form>
         </div>
         </div> 
         </div> 
         </div> 
    </div>
  )
}


  export default ModificarDatosPersonales;