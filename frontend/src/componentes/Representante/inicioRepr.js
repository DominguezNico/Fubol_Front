import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import GetJugClub from './Jugadores/getJugClub'
import registrar from './Jugadores/registrar'
import eliminar from './Jugadores/eliminar'
import getJugId from './Jugadores/getJugId'
import habilitar from './Jugadores/habilitar'
import pagenotfound from '../../paginas/PageNotFound.js'
import homeRepresentante from './homeRepresentante';



import cambiarDireccion from './club/cambiarDireccion';
import inscribirClub from './club/inscribirClub';
import verAvance from './club/verAvance';
import verTabla from './club/verTabla';
import verRepresentantes from './club/verRepresentantes';


import agregarJugador from './partidos/agregarJugador';
import eliminarJugador from './partidos/eliminarJugador';
import mostrarJugadores from './partidos/mostrarJugadores';
import verPlanilla from './partidos/verPlanilla';

import '../../estilos/estiloLogin.css'



function InicioRepr ({usuario}) {
  return(
<Router>
<div> 
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand> <Link to={{pathname:"/", state:usuario}} className="nav-link">Representante</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <NavDropdown title="Jugadores" id="basic-nav-dropdown">
          <NavDropdown.Item > <Link to={{pathname:"/registrar", state:usuario}}className="nav-link"> Registrar jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/eliminar"}className="nav-link"> Eliminar jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/getJugClub"}className="nav-link"> Obtener jugadores del club</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/getJugId"}className="nav-link"> Obtener jugador por id</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/habilitar"}className="nav-link"> Habilitar jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/deshabilitar"}className="nav-link"> Deshabilitar jugador</Link> </NavDropdown.Item>
       </NavDropdown>

        <NavDropdown title="Club" id="basic-nav-dropdown">
          <NavDropdown.Item > <Link to={"/inscribirClub"}className="nav-link"> Inscribir club</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/cambiarDireccion"}className="nav-link"> Cambiar direccion</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/verAvance"}className="nav-link"> Ver avance en Campeonatos</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/verTabla"}className="nav-link"> Tabla posiciones</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/verRepresentantes"}className="nav-link"> Ver otros Representantes</Link> </NavDropdown.Item>
        
        </NavDropdown>

        <NavDropdown title="Partidos" id="basic-nav-dropdown">
        <NavDropdown.Item > <Link to={"/mostrarJugadores"}className="nav-link"> Mostrar Jugadores </Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/agregarJugador"}className="nav-link"> Agregar Jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/eliminarJugador"}className="nav-link"> Eliminar Jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/verPlanilla"}className="nav-link"> Ver Planilla</Link> </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
<div> 

<Switch>
  <Route exact path="/" component={homeRepresentante}/>

	  <Route exact path="/getJugClub" render={(props) => (<GetJugClub {...props} usuario={usuario}/>)}/>
    <Route exact path="/registrar" component={registrar}/>
    <Route exact path="/eliminar" component={eliminar}/>
    <Route exact path="/getJugId" component={getJugId}/>
    <Route exact path="/habilitar" component={habilitar}/>
    <Route exact path="/deshabilitar" component={habilitar}/>

    <Route exact path="/inscribirClub" component={inscribirClub}/>
    <Route exact path="/cambiarDireccion" component={cambiarDireccion}/>
    <Route exact path="/verAvance" component={verAvance}/>
    <Route exact path="/verTabla" component={verTabla}/>
    <Route exact path="/verRepresentantes" component={verRepresentantes}/>
    
    <Route exact path="/mostrarJugadores" component={mostrarJugadores}/>
    <Route exact path="/agregarJugador" component={agregarJugador}/>
    <Route exact path="/eliminarJugador" component={eliminarJugador}/>
    <Route exact path="/verPlanilla" component={verPlanilla}/>


    <Route component={pagenotfound}/>
</Switch>

</div>
</div>
</Router>
  )
}

export default InicioRepr
