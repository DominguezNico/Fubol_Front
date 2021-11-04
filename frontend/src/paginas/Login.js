import React, { useContext, useState, useEffect } from "react";
import "../estilos/estiloLogin.css"
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";

import Admin from '../componentes/Admin/inicioAdmin'
import Jugador from '../componentes/Jugador/inicioJugador.js'
import Representante from '../componentes/Representante/inicioRepr.js'




function Login () {
	/*
    const state = {
        isLoading: true,
        rol:"",
		dni:"",
		doc:"",
		contraseñaInput:"",
		contraseña:"",
		check:0
      };*/
	  
	
	const [DNI, setDNI] = useState("");
	const [password, setPassword] = useState("");
	const [rol, setRol] = useState("");
	const [check, setCheck] = useState("");
	const history=useHistory();

	//const openCheck = () => setCheck(0);
  	
	const handleDNIChange = (e) => {
    	setDNI(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
  	


	


	const comprobarUsuario = async () => {
		await fetch(`http://localhost:8080/chequearUsuarioContraseña?doc=${DNI}&contra=${password}`)
			.then(response => response.json())
			.then(data => setCheck(data))
		console.log(check)
	
		if(check==1){
			getRol()
		}
	};


	const getRol =  () =>{
		console.log(DNI)
		fetch(`http://localhost:8080/obtenerRolUsuario?doc=${DNI}`)
			.then(response => response.json())
			.then(data => setRol(data.rol));
		console.log("ROL")
		console.log(rol)

		if(rol=="JUGADOR"){
			history.push("/Jugadores");
			return(
				<BrowserRouter>
					<Switch>
						<Route exact path="/Jugador" component={Jugador}/>
					</Switch>
				</BrowserRouter>
			)
		}else if(rol == "REPRESENTANTE"){
			history.push("/Representante");
			return(
				<BrowserRouter>
					<Switch>
						<Route exact path="/Representante" component={Representante}/>
					</Switch>
				</BrowserRouter>
			)
		}else if(rol == "ADMIN"){
			history.push("/Admin");
			return(
				<BrowserRouter>
					<Switch>
						<Route exact path="/Admin" component={Admin}/>
					</Switch>
				</BrowserRouter>
			)
		}

	}

return(
	
  <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Iniciar sesion</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><BsFillPersonFill/></span>
						</div>
						<input type="text" id="doc" class="form-control" placeholder="Docomento"  onChange={handleDNIChange} />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><BsKeyFill/></span>
						</div>
						<input type="contraseña" class="form-control" placeholder="Contraseña"  onChange={handlePasswordChange}/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Recordarme
					</div>
					<div class="form-group">
						<input type="Button" value="Login" class="btn float-right login_btn" onClick={comprobarUsuario}/>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					No tienes cuenta?<a href="#">Registrate</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Olvidaste la contraseña?</a>
				</div>
			</div>
		</div>
	</div>
	
</div>



)
}

export default Login;