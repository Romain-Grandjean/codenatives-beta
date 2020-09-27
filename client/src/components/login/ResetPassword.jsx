import React from 'react';

export default function ResetPassword() {
    return (
        <div>
			<form className="reset-window">
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

				<button id="reset-forgotten">I don't have a CodeNatives account</button>
			</form>
        </div>
    )
}
