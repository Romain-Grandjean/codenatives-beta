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
			errors: {},
		};
	}

	validate = () => {
		const errors = {};

		const { userData } = this.state;
		if (userData.firstName.trim() === '')
			errors.firstName = 'First name is required.';
		if (userData.lastName.trim() === '')
			errors.lastName = 'Last name is required.';
		if (userData.email.trim() === '') errors.email = 'Email is required.';
		if (userData.password.trim() === '')
			errors.password = 'Password is required.';

		return Object.keys(errors).length === 0 ? 0 : errors;
	};

	onChange = (e) => {
		const userData = { ...this.state.userData };

		userData[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ userData });
		console.log('this userdata state', this.state.userData);
	};

	registerUser = async (e) => {
		e.preventDefault();

		const errors = this.validate();
		this.setState({ errors });
		if (errors) return;

		try {
			const response = await register(this.state.userData);
			localStorage.setItem('token', response.headers['x-auth-token']);
			window.location = '/account';
		} catch (error) {
			if (error.response && error.response.status === 400) {
				const errors = { ...this.state.errors };
				errors.server = error.response.data;
				this.setState({ errors });
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
					{this.state.errors.firstName && (
						<div className="alert-register-firstname">
							{this.state.errors.firstName}
						</div>
					)}
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
					{this.state.errors.lastName && (
						<div className="alert-register-lastName">
							{this.state.errors.lastName}
						</div>
					)}
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
					{this.state.errors.email && (
						<div className="alert-register-email">
							{this.state.errors.email}
						</div>
					)}
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
					{this.state.errors.password && (
						<div className="alert-register-password">
							{this.state.errors.password}
						</div>
					)}
					{this.state.errors.server && (
						<div className="alert-register-server">
							{this.state.errors.server}
						</div>
					)}
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
