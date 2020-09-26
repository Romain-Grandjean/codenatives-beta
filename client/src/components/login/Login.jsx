import React from 'react';

export default function Login() {
	return (
		<div>
			<form className="login-window">
				<h1>Login</h1>
				<div className="login-email">
					<label>Email:</label>
					<input></input>
				</div>
				<div className="login-password">
					<label>Password:</label>
					<input></input>
				</div>

				<button>You already have an account</button>

				<button>Forgotten password</button>
			</form>
		</div>
	);
}
