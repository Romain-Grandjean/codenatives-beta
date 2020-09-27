import React from 'react';

export default function Register() {
	return (
		<div>
			<form className="login-window">
				<label>First Name</label>
				<input> autoFocus
					{' '}
			
				</input>
                <div className="input-underline"></div>
				<label>Last Name</label>
				<input>
					<div className="input-underline"></div>
				</input>

				<label>Email Address</label>
				<input>
					{' '}
					<div className="input-underline"></div>
				</input>

				<button>Create account</button>
			</form>
		</div>
	);
}
