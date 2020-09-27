import React from 'react';

export default function Login(props) {
	return (
		<div>
			<form className="login-window">
				<img
					id="login-icon-stop"
					src={process.env.PUBLIC_URL + '/img/icon-stop.svg'}
					alt="arrow"
					onClick={props.closeWindow}
				/>
				<h1 id="login-title">Login</h1>
				<div className="login-email">
					<label>Email :</label>
					<div className="login-field">
						<input autofocus="true" type="email"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<div className="login-password">
					<label>Password :</label>
					<div className="login-field">
						<input type="password"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<button id="login-button" className="btn-big, btn-yellow">
					Login
				</button>

				<button id="login-account" onClick={props.register}>
					You don't have an account, create one{' '}
					<underline>HERE</underline>
				</button>

				<button id="login-forgotten" onClick={props.resetPassword}>
					Forgotten password
				</button>
			</form>
		</div>
	);
}
