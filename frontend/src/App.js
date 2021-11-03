import React from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,render} from "react-router-dom";
import { Navbar,Container,Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {hasRole,isAllowed} from './auth';

import { browserHistory } from 'react-router';

import Home from './paginas/Home'
import Login from './paginas/Login'
import PageNotFound from './paginas/PageNotFound'
import Jugador from './componentes/Jugador/inicioJugador'
import Admin from './componentes/Admin/inicioAdmin'
import Representante from './componentes/Representante/inicioRepr'

import ClubComponent from "./componentes/ClubComponent";
import { useHistory } from "react-router-dom";




function App() {
  
  return (

    {if (this.state.rol=="JUGADOR"){
      <Admin />
    }
  }








  
    <Router>
      <div className="App">
      
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">TP_APIS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        {/*<button type="button" onClick={changePage}>Go to a New Page!</button>*/}
        <Switch>
        
          <Route exact path="/login" component={Login} />
          <Route component={PageNotFound} />
         {/* {hasRole(user,['jugador']) && <Route path='/jugador' component={Jugador}/>} 
          {hasRole(user,['admin']) && <Route path='/admin' component={Admin}/>}
          {hasRole(user,['representante']) && <Route path='/representante' component={Representante}/>}*/}
          <Route exact path="/" component={Home} />
        </Switch>


       
      </div>
       


    </Router>
  );
}

export default App;
