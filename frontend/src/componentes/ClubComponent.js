import React, { Component } from 'react';


class ClubComponent extends React.Component{

    state = {
        isLoading: true,
        clubes: [],
        club: ""
      };

/*C:\Users\Flore\TP_APIS\TP_APIS_FRONT\frontend>*/
   async  componentDidMount(){
     fetch('http://localhost:8080/obtenerClubes')
        .then(async response => {
          const data = await response.json();

          if(!response.ok){
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
          
          this.setState({clubes: [data], isLoading: false})

        })
        .catch(error => {
          this.setState({ errorMessage: error.toString()});
          console.error('Hubo un error! ',error)
        })
          
          
          

    .catch((error) => {
      console.log(error)
       })

       
       this.getClubbyId(16);
    }



    //evaluar que el fetch no este vacio

     getClubbyId = async (id) =>{

      fetch(`http://localhost:8080/getClub?idClub=${id}`)
      .then(response => response.json())
      .then(clubJSON => this.setState({club:clubJSON}));

       /*
     await axios.get(`http://localhost:8080/getClub?idClub=${id}`)
      .then(res =>   this.setState({club:res.data}))
  .catch((error) => {
    console.log(error)})

*/
    }


   /* crearClub=async (id,nombre,direccion) =>{
      await axios.post(`http://localhost:8080/addClub?idClub=${id}&nombreClub=${nombre}&DireccionClub=${direccion}`);
    }*/

    render(){

      
        if(this.state.isLoading){
            return <p> Cargando..</p>
        }else{
          const {clubes, isLoading,club} = this.state;
          

          console.log("CLubbbbbbbb")
          console.log(clubes[0].data)
          console.log(club.data)
           

        return (
          <>
          <h2>Lista</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nombre</th>
                </tr>
              </thead>
              <body>
                {clubes[0].map((dato) =>
                    <tr key={dato.idClub}>
                      <td>{dato.nombre}</td>
                      <td>{dato.direccion}</td>
                    </tr>
                  )}
              </body>
            </table>

                  
                

          </div>

          <div>
            <h2> CLUB</h2>

                {this.state.club.direccion}

          </div>
          </>


          );
          } 
}
}


export default ClubComponent