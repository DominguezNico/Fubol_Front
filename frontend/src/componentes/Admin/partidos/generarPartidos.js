import React, { useState } from 'react'


function GenerarPartidos (){

  const [numFecha,setFecha]=useState('');
  const [numZona,setZona]=useState('');
  const [clubLocal,setClubLocal]=useState('');
  const [clubVisitante,setClubVisitante]=useState('');
  const [fechaPart,setFechaPartido]=useState('');
  const [id,setIdCampeonato]=useState('');

  return(
    <div>
      <h3>CREAR PARTIDO</h3>
    </div>
  ) 
}


  export default GenerarPartidos;