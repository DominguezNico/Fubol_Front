import React, { useContext, useState, useEffect } from "react";
import "../estilos/estiloLogin.css"
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";

//import Admin from '../componentes/Admin/inicioAdmin.js'
import Jugador from '../componentes/Jugador/inicioJugador.js'
//import Representante from '../componentes/Representante/inicioRepr.js'

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

	setCheck(0);
  	
	const handleDNIChange = (e) => {
    	setDNI(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
  	


	const getRol = async (doc) =>{
		fetch(`http://localhost:8080/obtenerRolUsuario?doc=${doc}`)
		.then(response => response.json())
		.then(rolJSON => setRol(rolJSON));

		if(rol=="JUGADOR"){
			<Jugador />
		}
		/*else if(rol=="REPRESENTANTE"){
			<Representante />
		}else{
			<Admin />
		}*/
	}


	const comprobarUsuario = (dni,contra) => {
		// POST request using fetch inside useEffect React hook
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: 'React Hooks POST Request Example' })
		};
		fetch(`http://localhost:8080/chequearUsuarioContraseña?doc=${dni}&contra=${contra}`, requestOptions)
			.then(response => response.json())
			.then(data => setCheck(data));
	
		if(check==1){
			getRol(DNI)
			
		}
	};




	console.log("hola")
return(
  <div class="container">
	  {console.log("hola2")}
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
						<input type="text" id="doc" class="form-control" placeholder="Docomento" requerid value={DNI} onChange={handleDNIChange} />
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><BsKeyFill/></span>
						</div>
						<input type="contraseña" required class="form-control" placeholder="Contraseña" value={password} onChange={handlePasswordChange}/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Recordarme
					</div>
					<div class="form-group">
						<input type="submit" onClick={comprobarUsuario(DNI,password)} value="Login" class="btn float-right login_btn"/>
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