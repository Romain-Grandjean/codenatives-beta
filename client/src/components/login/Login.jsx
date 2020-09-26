import React from 'react';

export default function Login() {
	return (
		<div>
			<form className="login-window">
				<h1 id='login-title'>Login</h1>
				<div className="login-email">
					<label>Email :</label>
					<input></input>
				</div>
				<div className="login-password">
					<label>Password :</label>
					<input></input>
				</div>

				<button id="login-account">You already have an account</button>

				<button id="login-forgotten">Forgotten password</button>
			</form>
		</div>
	);
}
