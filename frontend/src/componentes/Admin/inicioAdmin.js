import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import crearCampeonato  from './campeonatos/crearCampeonato';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import homeAdmin from './homeAdmin';
import pagenotfound from '../../paginas/PageNotFound.js'
import inscribirClub from './campeonatos/inscribirClub';
import actualizarTablaPosiciones  from './campeonatos/actualizarTablaPosiciones';
import obtenerEstado from './campeonatos/obtenerEstado';
import crearTablaPosiciones from './campeonatos/crearTablaPosiciones';
import obtenerTablaPosiciones from './campeonatos/obtenerTablaPosiciones';
import crearEstadisticas from './campeonatos/crearEstadisticas';

function InicioAdmin () {
  console.log("llegue")
  return(
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand> <Link to={"/"} className="nav-link">Administrador</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
          <NavDropdown.Item > <Link to={"/crearCampeonato"}className="nav-link"> Crear campeonato</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/crearEstadisticas"}className="nav-link"> crear Estadisticas</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/crearTablaPosiciones"}className="nav-link"> Crear TablaPosiciones</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/inscribirClub"}className="nav-link"> inscribirClub</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/obtenerEstado"}className="nav-link"> obtenerEstado</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/obtenerTablaPosiciones"}className="nav-link"> obtenerTablaPosiciones</Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to={"/actualizarTablaPosiciones"}className="nav-link"> actualizarTablaPosiciones</Link> </NavDropdown.Item>

         
         
         
          </NavDropdown>
          <NavDropdown title="Club" id="basic-nav-dropdown">
          <NavDropdown.Item > <Link to={"/agregarRepresentante"}className="nav-link"> agregarRepresentante</Link> </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Partidos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Generar partidos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Modificar fecha partido</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Obtener partidos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Actualizar goles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Actualizar faltas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Obtener estadísticas club</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Planilla" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Crear planilla</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Modificar planillas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ver planillas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
  <Switch>
    <Route exact path="/" component={homeAdmin}/>
	<Route exact path="/crearCampeonato" component={crearCampeonato}/>
  <Route exact path="/crearEstadisticas" component={crearEstadisticas}/>
  <Route exact path="/crearTablaPosiciones" component={crearTablaPosiciones}/>
  <Route exact path="/inscribirClub" component={inscribirClub}/>
  <Route exact path="/obtenerEstado" component={obtenerEstado}/>
  <Route exact path="/obtenerTablaPosiciones" component={obtenerTablaPosiciones}/>
  <Route exact path="/actualizarTablaPosiciones" component={actualizarTablaPosiciones}/>


  <Route component={pagenotfound}/>
</Switch>
</div>
</div>
</Router>
  )
}

export default InicioAdmin
