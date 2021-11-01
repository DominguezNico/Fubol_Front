import React from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import { Navbar,Container,Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './paginas/Home'
import Login from './paginas/Login'
import PageNotFound from './paginas/PageNotFound'

import ClubComponent from "./componentes/ClubComponent";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">TP_APIS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/ClubComponent">Clubes</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route  exact path="/ClubComponent" component={ClubComponent} />
          <Route component={PageNotFound} />
        
        </Switch>


       
      </div>
       


    </Router>
  );
}

export default App;
