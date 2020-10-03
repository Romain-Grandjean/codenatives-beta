import React from 'react';
import { register } from '../../services/usersService';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				isAdmin: false,
			},
			error: '',
		};
	}

	onChange = (e) => {
		const userData = { ...this.state.userData };

		userData[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ userData });
		console.log('this userdata state', this.state.userData);
	};

	registerUser = async (e) => {
		e.preventDefault();
		try {
			const response = await register(this.state.userData);
			localStorage.setItem('token', response.headers['x-auth-token'])
			window.location = '/account';
		} catch (error) {
			if (error.response && error.status === 400){
				console.log("user issue")
			}
		}

	};
	render() {
		return (
			<div>
				<form className="register-window" onSubmit={this.registerUser}>
					<img
						id="login-icon-stop"
						src={process.env.PUBLIC_URL + '/img/icon-stop.svg'}
						alt="arrow"
						onClick={this.props.closeWindow}
					/>
					<h1 id="register-title">Register Account</h1>
					<div className="register-firstname">
						<label>First Name :</label>
						<div className="register-field">
							<input
								autoFocus={true}
								type="text"
								name="firstName"
								value={this.state.userData.firstName}
								onChange={this.onChange}
							></input>
							<div className="input-underline"></div>
						</div>
					</div>
					<div className="register-lastname">
						<label>Last Name :</label>
						<div className="register-field">
							<input
								type="text"
								name="lastName"
								value={this.state.userData.lastName}
								onChange={this.onChange}
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
								value={this.state.userData.email}
								onChange={this.onChange}
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
								value={this.state.userData.password}
								onChange={this.onChange}
							></input>
							<div className="input-underline"></div>
						</div>
					</div>
					<button
						id="register-button"
						className="btn-big, btn-yellow"
						onSubmit={this.registerUser}
					>
						Register
					</button>

					<button id="register-account" onClick={this.props.login}>
						You already have an account, login{' '}
						<underline>HERE</underline>
					</button>
				</form>
			</div>
		);
	}
}

export default Register;
