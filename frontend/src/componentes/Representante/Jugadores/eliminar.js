import React, { useContext, useState, useEffect } from "react";

function Eliminar(props){

    const [buscarJugador,setBuscarJugador]=useState('');
    const [jugadores,setJugadores]=useState([]);

    const [pendiente,setPendiente]=useState(false);
   
    useEffect(() => {
        obtenerJugadores();
      },[]);
    

    const handleIdJugadorChange = (e) => {
        console.log("VALOR "+e.target.value)
        setBuscarJugador(e.target.value);
      }


     const  obtenerJugadores =  async () =>{
        await fetch(`http://localhost:8080/getJugadoresClub?idClub=${props.location.state.club.idClub}`)
         .then(response =>response.json())
         .then(response => {
  
          let nombres=[]
   
   
          response.map(datos => {
           nombres.push([datos.nombre,datos.apellido,datos.documento,datos.id,datos.idClub])
          })
     
      
      
           setJugadores([["Nombre","Apellido","X"]].concat(nombres));
      
      
         }).catch(e => {
           console.log(e);
         })
       }



       
       const eliminar =   () => {
      
        if(buscarJugador!="IdJugadores"){
          setPendiente(true);
          
    
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({ })
          };
    
          console.log(requestOptions)
    
          fetch(`http://localhost:8080/quitarJugadorClub?idJugador=${buscarJugador}&idClub=${props.location.state.club.idClub}`, requestOptions )
          .then( () => {
              console.log('Se deshabilito el jugador');
              alert("Se deshabilito correctamente");
              setPendiente(false)
          })
        }
        
      }



return(
    <div className="containerrr3">
    <div className="d-flex justify-content-center h-100">
     <div className="card8">
       <div className="card-header">
       <div className="card-body">
          <form> 
          <div className="container">
              
          <div className="dropdown">
                   <select onChange={handleIdJugadorChange}>
                       {jugadores?.map(jugador => {
                         console.log(jugador)
                         return (
                           <option value={jugador[3]}> {"Doc: "+jugador[2]+" - "+jugador[0]+" "+jugador[1]} </option>
                         )
                       })}
                     </select>
                     
             </div> 
             <br/>
             
         </div>

        <br/> 
        <div className="form-group centrar">
        {!pendiente && <input type="Button" value="Eliminar " className="boton" onClick={eliminar} />}
          {pendiente && <input type="Button" value=" Eliminando ..." className="boton" onClick={eliminar} />}
                      
        </div>
       </form>

       </div>
     </div>
   </div>
   </div>
   </div>
 )
}
export default Eliminar
