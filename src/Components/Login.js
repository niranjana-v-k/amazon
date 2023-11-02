import React from "react";
import "./Login.css";

function Login() {
	return (
		<>
			<p className="title">Login Form</p>

			<form className="App">
				<input placeholder="enter your queries" type="text" />
				<input placeholder="enter your email" type="email" />
				<input placeholder="enter your password" type="password" />
				<input type={"submit"}
					style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</>
	);
}

export default Login;