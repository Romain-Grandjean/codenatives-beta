import React from 'react';

export default function Register() {
	return (
		<div>
			<form className="register-window">
				<h1 id="register-title">Register Account</h1>
				<div className="register-firstname">
					<label>First Name :</label>
					<div className="register-field">
						<input autofocus="true" type="email"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<div className="register-lastname">
					<label>Last Name :</label>
					<div className="register-field">
						<input autofocus="true" type="email"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<div className="register-email">
					<label>Email :</label>
					<div className="register-field">
						<input autofocus="true" type="email"></input>
						<div className="input-underline"></div>
					</div>
				</div>
			
				<div className="register-password">
					<label>Password :</label>
					<div className="register-field">
						<input type="password"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<button id="register-button" className="btn-big, btn-yellow">
					Register
				</button>

				<button id="register-account">
					You already have an account, login{' '}
					<underline>HERE</underline>
				</button>

				
			</form>
		</div>
	);
}
