import React from 'react';
import Login from '../login/Login';
import Register from '../login/Register';
import ResetPassword from '../login/ResetPassword';
import { register } from '../../services/usersService';

import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: '',
			window: '',
			userData: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
			},
		};
	}
	login = () => {
		this.setState({
			display: 'active',
			window: (
				<Login
					closeWindow={this.closeWindow}
					register={this.register}
					resetPassword={this.resetPassword}
				/>
			),
		});
	};

	register = () => {
		this.setState({
			display: 'active',
			window: (
				<Register
					closeWindow={this.closeWindow}
					login={this.login}
					valueFirstName={this.state.userData.firstName}
					valueLastName={this.state.userData.lastName}
					email={this.state.userData.email}
					password={this.state.userData.password}
					onChange={this.handleChange}
				/>
			),
		});
	};

	resetPassword = () => {
		this.setState({
			display: 'active',
			window: <ResetPassword closeWindow={this.closeWindow} />,
		});
	};

	closeWindow = () => {
		this.setState({ display: '' });
	};

	handleChange = (e) =>{
		const userData = { ...this.state.userData };

		userData[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ userData });
	}

	registerUser = async () => {
		await register(this.state.userData);
	};

	render() {
		return (
			<>
				<div className="header">
					<Link to="" id="logo-header">
						<img
							src={
								process.env.PUBLIC_URL + '/img/logo_header.png'
							}
							alt="logo"
						/>
					</Link>

					<nav className="navigation">
						<input type="checkbox" />

						<div className="line1"></div>
						<div className="line2"></div>

						<div className="nav1">
							<NavLink to="" className="nav1-elements">
								Concept
							</NavLink>
							<NavLink to="" className="nav1-elements">
								Contribute
							</NavLink>
							<NavLink to="" className="nav1-elements">
								For Schools & Recruiters
							</NavLink>
							<div className="line-nav"></div>
						</div>
						<div className="nav2">
							<button
								className="nav2-elements"
								onClick={this.login}
							>
								Login
							</button>
							<button
								className="button-signup"
								onClick={this.register}
							>
								Sign Up
							</button>
						</div>
					</nav>
					<div className="line-header"></div>
				</div>
				<div
					className="connection-interface"
					style={{
						display:
							this.state.display === 'active' ? 'flex' : 'none',
					}}
				>
					{this.state.window}
				</div>
			</>
		);
	}
}

export default Header;
