import React from 'react'
import "../estilos/estiloLogin.css"
import { BsKeyFill,BsFillPersonFill} from "react-icons/bs";





const Login = () => (
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
						<input type="text" class="form-control" placeholder="Nombre"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><BsKeyFill/></span>
						</div>
						<input type="password" class="form-control" placeholder="Contraseña"/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox"/>Recordarme
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn"/>
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

export default Login