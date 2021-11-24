import React, { useContext, useState, useEffect } from "react";


function Deshabilitar(props){
    const [buscarJugador,setBuscarJugador]=useState('');
    const [jugadores,setJugadores]=useState([]);

    const [pendiente,setPendiente]=useState(false);
   
    console.log(props.location.state)
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
           console.log("RESULTA")
          console.log(response)
           response.map(datos => {
            nombres.push([datos.nombre,datos.apellido,datos.documento,datos.id])
           })
      
      
           setJugadores([["Nombre","Apellido","X"]].concat(nombres));
      
      
         }).catch(e => {
           console.log(e);
         })
       }
      



       const deshabilitar =   () => {
      
        if(buscarJugador!="IdJugadores"){
          setPendiente(true);
          
    
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({ })
          };
    
          console.log(requestOptions)
    
          fetch(`http://localhost:8080/deshabilitarJugador?idJugador=${buscarJugador}`, requestOptions )
          .then( () => {
              console.log('Se deshabilito el jugador');
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
                          {jugadores.map(jugador => {
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
           {!pendiente && <input type="Button" value="Deshabilitar " className="boton" onClick={deshabilitar} />}
             {pendiente && <input type="Button" value=" Deshabilitando ..." className="boton" onClick={deshabilitar} />}
                         
           </div>
          </form>

          </div>

        </div>
      </div>
      </div>
      </div>
    )
}

export default Deshabilitar