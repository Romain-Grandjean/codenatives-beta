import React from 'react';

export default function Register(props) {
	return (
		<div>
			<form className="register-window">
				<img
					id="login-icon-stop"
					src={process.env.PUBLIC_URL + '/img/icon-stop.svg'}
					alt="arrow"
					onClick={props.closeWindow}
				/>
				<h1 id="register-title">Register Account</h1>
				<div className="register-firstname">
					<label>First Name :</label>
					<div className="register-field">
						<input
							autoFocus={true}
							type="text"
							name="firstName"
							value={props.valueFirstName}
							onChange={props.onChange}
						></input>
						<div className="input-underline"></div>
					</div>
				</div>
				{/* <div className="register-lastname">
					<label>Last Name :</label>
					<div className="register-field">
						<input
							type="text"
							name="lastName"
							value={props.valueLastName}
							onChange={props.handleChange}
						></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<div className="register-email">
					<label>Email :</label>
					<div className="register-field">
						<input
							type="email"
							name="email"
							value={props.email}
							onChange={props.handleChange}
						></input>
						<div className="input-underline"></div>
					</div>
				</div>

				<div className="register-password">
					<label>Password :</label>
					<div className="register-field">
						<input
							type="password"
							name="password"
							value={props.password}
							onChange={props.handleChange}
						></input>
						<div className="input-underline"></div>
					</div>
				</div> */}
				<button id="register-button" className="btn-big, btn-yellow">
					Register
				</button>

				<button id="register-account" onClick={props.login}>
					You already have an account, login{' '}
					<underline>HERE</underline>
				</button>
			</form>
		</div>
	);
}
