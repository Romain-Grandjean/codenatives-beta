import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../structure/Footer';
import { postOneElement } from '../../services/usersService';

class NewUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				isAdmin: undefined,
			},
		};
	}

	handleChange = (e) => {
		const user = { ...this.state.user };

		user[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ user });
		console.log({ user });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await postOneElement(this.state.user);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
		this.props.history.push('/admin/users');
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-new" onSubmit={this.handleSubmit}>
						<div className="new-title-zone">
							<h1 id="new-title">New User</h1>
						</div>

						<label className="new-type" htmlFor="isAdmin">
							IsAdmin
						</label>
						<select
							className="new-type-input"
							name="isAdmin"
							id="isAdmin"
							required
							value={this.state.user['isAdmin']}
							onChange={this.handleChange}
						>
							<option value="true">True</option>
							<option value="false">False</option>
						</select>

						<label className="new-question" htmlFor="firstName">
							First Name
						</label>
						<input
							className="new-question-input"
							type="text"
							name="firstName"
							id="firstName"
							required
							value={this.state.user['firstName']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution1" htmlFor="lastName">
							Last Name
						</label>
						<input
							className="new-solution1-input"
							type="text"
							name="lastName"
							id="lastName"
							required
							value={this.state.user['lastName']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution2" htmlFor="email">
							Email
						</label>
						<input
							className="new-solution2-input"
							type="text"
							name="email"
							id="email"
							required
							value={this.state.user['email']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution3" htmlFor="password">
							Password
						</label>
						<input
							className="new-solution3-input"
							type="text"
							name="password"
							id="password"
							required
							value={this.state.user['password']}
							onChange={this.handleChange}
						></input>

						<div className="btn-zone btn-new">
							<button
								type="submit"
								className="btn-small btn-yellow btn-padding"
								onSubmit={this.handleSubmit}
							>
								Save
							</button>
							<Link id="new-back" to="/admin/users">
								back
							</Link>
						</div>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default NewUser;
