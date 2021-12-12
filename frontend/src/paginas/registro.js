import React, { useState,useEffect } from 'react'

import {Link} from "react-router-dom";
import Login from './Login.js'
function Registro ()  {	

	useEffect(() => {
		obtenerUsuarios();
	  },[]);

	const [doc,setDoc]=useState(0);
	const [contra,setContra]=useState('');
	const [contra2,setContra2]=useState('');
	const [usuarios,setUsuarios]=useState([]);
	
	const [pendiente,setPendiente]=useState(false);
	
	const [espacio,setEspacio]=useState(true);
	const [campoVacio,setCampoVacio]=useState(true);
	const [coinciden,setCoinciden]=useState(true);
	const [usuarioExiste,setUsuarioExiste]=useState(true);
	const [NaN,setNaN]=useState(true);

	const [reload,setReload]=useState(false);

	
	const  obtenerUsuarios =  async () =>{
		await fetch('https://futbolito-back.herokuapp.com/obtenerUsuarios')
		 .then(response =>response.json())
		 .then(response => {
	  
		   let usuarios=[]
	  
	  
		   response?.map(datos => {
			 usuarios.push([datos.documento])
		   })
	  
		  
		   setUsuarios(usuarios);
	  
	  
		 }).catch(e => {
		   console.log(e);
		 })
	   }

	const registrarUsuario = () =>{

		setPendiente(true);
		setEspacio(true);
		setCampoVacio(true);
		setCoinciden(true);
		setUsuarioExiste(true);
		setNaN(true);

		var noEsUnDoc=false;
		var espacios = false;
		var campo= false;
		var iguales= false;
		var existe=false;
		var cont = 0;
		var p1=contra;
		var p2=contra2;
		

		while (!espacios && (cont < p1.length)) {
			if (p1.charAt(cont) == " ")
				espacios = true;
			cont++;
		}
		
		if (espacios) {
			alert ("La contraseña no puede contener espacios en blanco");
			setEspacio(false)
		}

		if (p1.length == 0 || p2.length == 0) {
			alert("Los campos de la password no pueden quedar vacios");
			campo= true;
			setCampoVacio(false);
		  }

		if (p1 != p2) {
			alert("Las passwords deben de coincidir");
			iguales= true;
			setCoinciden(false);
		} 

		if (isNaN(doc)===true){
			alert("Lo que ingresaste no es un documento");
			noEsUnDoc= true;
			setNaN(false);
		}

		usuarios?.map(u => {
			if(u==doc){
				alert("Ya existe un usuario con ese documento");
				existe= true;
				setUsuarioExiste(false);
			}
		})


		if( !espacios && !campo && !iguales && !existe && !noEsUnDoc){
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				body: JSON.stringify({ })
			};
			
			console.log("entro aca?")
			console.log(doc)
			console.log(contra)

			fetch(`https://futbolito-back.herokuapp.com/crearUsuario?doc=${doc}&contra=${contra}`,requestOptions)
			.then(response=> response.text())
			.then(response=>{
				setPendiente(false)
				
				if(response==='NotFound'){
					alert("No existe ese documento en nuestra base de datos. Intente nuevamente")
				}else{
					setReload(true)
				}
				
			}).catch(e => {
				console.log(e);
				
				setPendiente(false);
			  })

		}else{
			setPendiente(false);
		}
		

	}

	const handleDocChange = (e) => {
		setDoc(e.target.value);
	  };


	const handleContraChange = (e) => {
		setContra(e.target.value);
	};

	const handleContra2Change = (e) => {
		setContra2(e.target.value);
	};




if(reload===false){
	
	return(
	<div class="login-page">
	<div class="form">
	  <div class="login-form">
		<input type="text" placeholder="Documento" onChange={handleDocChange} />
		<input type="password" placeholder="Contraseña" onChange={handleContraChange}  />
		<input type="password" placeholder="Repite la Contraseña"  onChange={handleContra2Change} />
		{!pendiente && <button onClick={registrarUsuario} >Crear usuario</button>}
		{pendiente && <button >Guardando usuario</button>}
		<p class="message">Tenes cuenta? <a  href="#"><Link to={"/"} className="nav-link">Inicia sesión </Link></a></p>
	  </div>
	</div>
  </div>
  )
  
}else{
	window.location.replace('/');
}
}

export default Registro