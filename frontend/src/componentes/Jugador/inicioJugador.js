import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';




function inicioJugador () {
  console.log("llegue")
  return(
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Jugador</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Consultar avance del club</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ver tabla de posiciones</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Perfil" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Modificar datos personales</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ver mis faltas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Ver mis goles</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default inicioJugador