import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';





function inicioAdmin () {
  console.log("llegue")
  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Administrador</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Crear campeonato</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Obtener estado campeonato</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Inscribir un club</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tablas de posiciones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Estadísticas campeonatos</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Club" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Agregar representante a un club</NavDropdown.Item>
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
  )
}

export default inicioAdmin