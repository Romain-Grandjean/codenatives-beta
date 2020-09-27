import React from 'react';

export default function ResetPassword(props) {
    return (
        <div>
			<form className="reset-window">
			<img
					id="login-icon-stop"
					src={process.env.PUBLIC_URL + '/img/icon-stop.svg'}
					alt="arrow"
					onClick={props.closeWindow}

				/>
				<h1 id="reset-title">Reset Password</h1>
				<div className="reset-email">
					<label>Email :</label>
					<div className="reset-field">
						<input autofocus="true" type="email"></input>
						<div className="input-underline"></div>
					</div>
				</div>
				<button id="reset-button" className="btn-big, btn-yellow">
					Reset
				</button>
			</form>
        </div>
    )
}
