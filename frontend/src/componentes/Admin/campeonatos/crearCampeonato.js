import React from 'react'



const crearCampeonato =props => {



  const [descrip,setDescrip]=useState(inicialEstadoParams);
  const [fechaInicio,setfechaInicio]=useState(inicialEstadoParams);
  const [fechaFin,setFechaFin]=useState(inicialEstadoParams);
  const [estado,setEstado]=useState(inicialEstadoParams);



  const crearCamp =  (descripcion,fechaInicio,fechaFin,estado) => {
    await fetch(`http://localhost:8080/crearCampeonato?descripcion=${descripcion}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&estado=${estado}`)
    console.log('creado')
  };

    return(
     <h2></h2>
     
  
    )
  
  }
  export default crearCampeonato