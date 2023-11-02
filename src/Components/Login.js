import React from "react";
import "./Login.css";

function Login() {
	return (
		<div>
			<p className="title" style={{color:"white"}}>LOGIN FORM</p>

			<form className="App">
				<input placeholder="enter your queries" type="text" />
				<input placeholder="enter your email" type="email" />
				<input placeholder="enter your password" type="password" />
				<input type={"submit"}
					style={{ backgroundColor: "#a1eafb",width:'100px',marginLeft:'40%',color:'black' }} />
			</form>
			</div>
	);
}

export default Login;