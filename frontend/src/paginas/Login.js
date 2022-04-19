import React, { useState, useEffect } from "react";
import "../estilos/estiloLogin.css"
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom'


import Admin from '../componentes/Admin/inicioAdmin'
import Jugador from '../componentes/Jugador/inicioJugador.js'
import Representante from '../componentes/Representante/inicioRepr.js'
import Registro from './registro.js'
import Home from "../componentes/Jugador/homeJugador";

import './EstiloPagina/estiloInicio.css'



function Login ()  {	
	
	const [DNI, setDNI] = useState("");
	const [password, setPassword] = useState("");
	const [rol, setRol] = useState("nada");
	const [check, setCheck] = useState("");
	const [usuario,setUsuario]=useState('');

  	
	const handleDNIChange = (e) => {
    	setDNI(e.target.value);
  	};
  
	const handlePasswordChange = (e) => {
    	setPassword(e.target.value);
  	};
  	

	const comprobarUsuario = async () => {

		
		await fetch(`https://futbol--back.herokuapp.com/chequearUsuarioContraseña?doc=${DNI}&contra=${password}`)
			.then(response => response.json())
			.then(data => setCheck(data))
			console.log(check)
			
		
	};

	useEffect(() => { 
					if(check==1){
						getRol()
						getUsuario()
					}else if(check.status===500){
						errorIngreso()
					}else if(check===0){
						errorIngresoDeContraseña()
					}}
					 ,[check])

	const getRol = async () =>{
		console.log(DNI)
		await fetch(`https://futbol--back.herokuapp.com/obtenerRolUsuario?doc=${DNI}`)
			.then(response => response.json())
			.then(data => setRol(data.rol));
			getUsuario.call();
	}
	
	const getUsuario = async () => {
		await fetch(`https://futbol--back.herokuapp.com/getObjetoDNI?dni=${DNI}`)
			.then(response => response.json())
			.then(data => setUsuario(data));
	}

	const errorIngreso = () =>{
		alert("Los datos ingresados no son correctos")
	}
	const errorIngresoDeContraseña = () =>{
		alert("La contraseña ingresada no es valida.")
	}
	


if(rol ==="nada"){
	return(
		
		<div class="login-page">
		<div class="form">
		  <div class="login-form">
			<input type="text" placeholder="Documento" value={DNI} onChange={handleDNIChange}/>
			<input type="password" placeholder="Contraseña" value={password}  onChange={handlePasswordChange}/>
			<button onClick={comprobarUsuario}>Iniciar sesion</button>
			<p class="message">No estas registrado? <a  href="#"><Link to={"/Registro"} className="nav-link">Registrate </Link></a></p>
		  </div>
		</div>
	  </div>
	  
	  
	  
	)
} else if( rol==="JUGADOR"){
	return(<Jugador usuario={usuario}/>)
	
} else if(rol === "ADMIN"){
	return(<Admin />)
}else if (rol === "REPRESENTANTE")
	return(<Representante  usuario={usuario} />)

}


export default Login;
