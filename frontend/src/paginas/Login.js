import React, { useContext, useState, useEffect } from "react";
import "../estilos/estiloLogin.css"
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {BrowserRouter, Route, Switch,useHistory} from "react-router-dom";
import {createBrowserHistory} from "history";

import Admin from '../componentes/Admin/inicioAdmin'
import Jugador from '../componentes/Jugador/inicioJugador.js'
import Representante from '../componentes/Representante/inicioRepr.js'




function Login () {

	  
	
	const [DNI, setDNI] = useState("");
	const [password, setPassword] = useState("");
	const [rol, setRol] = useState("nada");
	const [check, setCheck] = useState("");
	const[usuario, setUsuario] = useState("");

  	
	const handleDNIChange = (e) => {
    	setDNI(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
  	


	
	const getUsuarioJugador = async () => {
		await fetch('http://localhost:8080//getResponsableDNI?dni=${DNI}')
			.then(response => response.json())
			.then(data => setUsuario(data))
	}

	const getUsuarioResponsable = async () => {
		await fetch('http://localhost:8080//getResponsableDNI?dni=${DNI}')
			.then(response => response.json())
			.then(data => setUsuario(data))
	}

	const comprobarUsuario = async () => {
		await fetch(`http://localhost:8080/chequearUsuarioContraseña?doc=${DNI}&contra=${password}`)
			.then(response => response.json())
			.then(data => setCheck(data))
	
		
	};

	useEffect(() => { if(check==1){
						getRol()
					} } , [check])

	const getRol = async () =>{
		console.log(DNI)
		await fetch(`http://localhost:8080/obtenerRolUsuario?doc=${DNI}`)
			.then(response => response.json())
			.then(data => setRol(data.rol));
			getUsuarioResponsable.call();
	}

useEffect(() => {  comprobarRol()  } , [rol] );

const comprobarRol =() => {
	
	if(rol=="JUGADOR"){
		//<Jugador/>
		console.log("Hola jugador")
		//history.push("/Jugadores");
		return(
			<Jugador/>
		)
	}else if(rol == "REPRESENTANTE"){
		//history.push("/Representante");
		return(
			<Representante name="rol" />
		)
	}else if(rol == "ADMIN"){
		//history.push("/Admin");
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/Admin" component={Admin}/>
				</Switch>
			</BrowserRouter>
		)
	}

}


if(rol ==="nada"){
	return(
		<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Iniciar sesion</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><BsFillPersonFill/></span>
						</div>
						<input type="text" id="doc" className="form-control" placeholder="Docomento"  onChange={handleDNIChange} />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><BsKeyFill/></span>
						</div>
						<input type="contraseña" className="form-control" placeholder="Contraseña"  onChange={handlePasswordChange}/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Recordarme
					</div>
					<div className="form-group">
						<input type="Button" value="Login" className="btn float-right login_btn " onClick={comprobarUsuario}/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					No tienes cuenta?<a href="#">Registrate</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Olvidaste la contraseña?</a>
				</div>
			</div>
		</div>
	</div>
	


</div>
	)
} else if( rol==="JUGADOR"){
	getUsuarioJugador.call();
	return(<Jugador usuario />)
	
} else if(rol === "ADMIN"){
	return(<Admin/>)
}else if (rol === "REPRESENTANTE")
	getUsuarioResponsable.call();
	return(<Representante usuario />) //probar pasando objeto entero

}


export default Login;