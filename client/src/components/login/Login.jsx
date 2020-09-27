import React from 'react';

export default function Login() {
	return (
		<div>
			<form className="login-window">
				<h1 id="login-title">Login</h1>
				<div className="login-email">
					<label>Email :</label>
					<div className="login-field">
						<input autoFocus></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<div className="login-password">
					<label>Password :</label>
					<div className="login-field">
						<input></input>
						<div className="input-underline"></div>

					</div>
				</div>
				<button id="login-button" className="btn-big, btn-yellow">Login</button>

				<button id="login-account">You already have an account</button>

				<button id="login-forgotten">Forgotten password</button>
			</form>
		</div>
	);
}
