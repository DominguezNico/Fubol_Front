import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import getJugClub from './Jugadores/getJugClub'
import registrar from './Jugadores/registrar'
import eliminar from './Jugadores/eliminar'
import getJugId from './Jugadores/getJugId'
import habilitar from './Jugadores/habilitar'
import pagenotfound from '../../paginas/PageNotFound.js'
import homeRepresentante from './homeRepresentante';
import '../../estilos/estiloLogin.css'



function InicioRepr (props) {
  const {usuario} = props;
  console.log({usuario})
  return(
<Router>
<div> 
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand> <Link to={"/"} className="nav-link">Representante</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Jugadores" id="basic-nav-dropdown">
          <NavDropdown.Item > <Link to={"/registrar" }className="nav-link"> Registrar jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/eliminar"}className="nav-link"> Eliminar jugador</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/getJugClub"}className="nav-link"> Obtener jugadores del club</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/getJugId"}className="nav-link"> Obtener jugador por id</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/habilitar"}className="nav-link"> habilitar/deshabilitar jugador</Link> </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Club" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Inscribir club a un campeonato</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cambiar dirección del club</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Ver avance campeonatos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Tabla de posiciones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ver otros representantes</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Partidos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mostrar jugadores por partido</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Agregar/eliminar jugador partido</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Planillas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
<div> 
<Switch>
    <Route exact path="/" component={homeRepresentante}/>
	<Route exact path="/getJugClub" component={getJugClub}/>
    <Route exact path="/registrar" component={registrar}/>
    <Route exact path="/eliminar" component={eliminar}/>
    <Route exact path="/getJugId" component={getJugId}/>
    <Route exact path="/habilitar" component={habilitar}/>
    <Route component={pagenotfound}/>
</Switch>

</div>
</div>
</Router>
  )
}

export default InicioRepr