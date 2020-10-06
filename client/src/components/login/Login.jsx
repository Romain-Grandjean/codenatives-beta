import React from 'react';
import { login } from '../../services/authService';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				email: '',
				password: '',
			},
			errors: {
				email: '',
				password: '',
			},
			server: '',
		};
	}
	validate = () => {
		const errors = {};
		const { userData } = this.state;
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

	loginUser = async (e) => {
		e.preventDefault();

		const server = {};
		const errors = this.validate();
		this.setState({ errors });
		if (errors) return;

		try {
			const { data } = this.state;
			const { data: jwt } = await login(
				this.state.userData.email,
				this.state.userData.password
			);
			localStorage.setItem('token', jwt);
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
				<form className="login-window" onSubmit={this.loginUser}>
					<img
						id="login-icon-stop"
						src={process.env.PUBLIC_URL + '/img/icon-stop.svg'}
						alt="arrow"
						onClick={this.props.closeWindow}
					/>
					<h1 id="login-title">Login</h1>
					<div className="login-email">
						<label>Email :</label>
						<div className="login-field">
							<input
								autoFocus={true}
								type="email"
								name="email"
								value={this.state.userData.email}
								onChange={this.onChange}
							></input>
							<div className="input-underline"></div>
						</div>
					</div>
					{this.state.errors.email && (
						<div className="alert-login-email">
							{this.state.errors.email}
						</div>
					)}
					<div className="login-password">
						<label>Password :</label>
						<div className="login-field">
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
						<div className="alert-login-password">
							{this.state.errors.password}
						</div>
					)}
					{this.state.errors.server && (
						<div className="alert-login-server">
							{this.state.errors.server}
						</div>
					)}
					<button
						id="login-button"
						className="btn-big, btn-yellow"
						onSubmit={this.loginUser}
					>
						Login
					</button>

					<button id="login-account" onClick={this.props.register}>
						You don't have an account, create one{' '}
						<underline>HERE</underline>
					</button>

					<button
						id="login-forgotten"
						onClick={this.props.resetPassword}
					>
						Forgotten password
					</button>
				</form>
			</div>
		);
	}
}
export default Login;
