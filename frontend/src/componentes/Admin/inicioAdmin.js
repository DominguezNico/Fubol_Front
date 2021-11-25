import React from 'react'

import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


import crearCampeonato  from './campeonatos/crearCampeonato';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import homeAdmin from './homeAdmin';
import pagenotfound from '../../paginas/PageNotFound.js'
import inscribirClub from './campeonatos/inscribirClub';

import obtenerEstado from './campeonatos/obtenerEstado';
import crearTablaPosiciones from './campeonatos/crearTablaPosiciones';
import obtenerTablaPosiciones from './campeonatos/obtenerTablaPosiciones';
import crearEstadisticas from './campeonatos/crearEstadisticas';
import AgregarRepresentante from './club/agregarRepresentante';

import generarPartidos from './partidos/generarPartidos.js';
import modificarFechaPartido from './partidos/modificarFechaPartido.js';
import actualizarGoles from './partidos/actualizarGoles.js';
import actualizarFaltas from './partidos/crearFaltaJugador.js';
import actualizarGolesVisitante from './partidos/actualizarGolesVisitante.js';
import obtenerPartidos from './partidos/obtenerPartidos.js';
import verPlanillas from './planilla/verPlanillas.js';


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
            <NavDropdown.Item > <Link to={"/crearCampeonato"} className="nav-link"> Crear campeonato</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to={"/crearEstadisticas"} className="nav-link">  Estadisticas</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to={"/crearTablaPosiciones"} className="nav-link"> Crear tabla de posiciones</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to={"/inscribirClub"} className="nav-link"> Inscribir club</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to={"/obtenerEstado"} className="nav-link"> Obtener estado</Link> </NavDropdown.Item>
            <NavDropdown.Item > <Link to={"/obtenerTablaPosiciones"} className="nav-link"> Obtener tabla de posiciones</Link> </NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Club" id="basic-nav-dropdown">
            <NavDropdown.Item > <Link to={"/agregarRepresentante"} className="nav-link"> Agregar representante</Link> </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Partidos" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to={"/generarPartidos"} className="nav-link">Generar partidos</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/ModificarFechaPartido"} className="nav-link">Modificar fecha partido</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/ActualuzarGoles"} className="nav-link">Actualizar goles partido</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/axtualizarFaltas"} className="nav-link">Actualizar faltas</Link> </NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/obtenerPartidos"} className="nav-link">Obtener Partidos</Link> </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Planilla" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link to={"/verPlanillas"} className="nav-link">Ver planillas</Link> </NavDropdown.Item>
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
       

        <Route exact path="/agregarRepresentante" component={AgregarRepresentante}/>

        <Route exact path="/generarPartidos" component={generarPartidos}/>
        <Route exact path="/ModificarFechaPartido" component={modificarFechaPartido}/>
        <Route exact path="/ActualuzarGoles" component={actualizarGoles}/>
        <Route exact path="/axtualizarFaltas" component={actualizarFaltas}/>
        <Route exact path="/obtenerPartidos" component={obtenerPartidos}/>

        <Route exact path="/verPlanillas" component={verPlanillas}/>
      
        <Route component={pagenotfound}/>
      </Switch>
    </div>

  </div>
  </Router>
  )
}

export default InicioAdmin
