import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../structure/Footer';
import {
	getOneElement,
	deleteElement,
	putOneElement,
} from '../../services/usersService';
import { toast } from 'react-toastify';

class EditQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				isAdmin: false,
			},
		};
	}

	async componentDidMount() {
		const { data: user } = await getOneElement(this.props.match.params.id);
		this.setState({ user });
		console.log('this is state question', this.state.user);
	}

	handleChange = (e) => {
		const user = { ...this.state.user };

		user[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ user });
	};

	handleSubmit = async (id, element) => {
		try {
			await putOneElement(id, element);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	handleDelete = async (id) => {
		try {
			await deleteElement(id);
			// this.props.history.replace('/admin');
		} catch (error) {
			if (error.response && error.response.status === 404)
				toast.error('This element was not deleted');
		}
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-new" onSubmit={this.handleSubmit}>
						<div className="new-title-zone">
							<h1>User ID: {this.props.match.params.id}</h1>
						</div>

						<label className="new-type" htmlFor="type">
							IsAdmin
						</label>
						<select
							className="new-type-input"
							name="isAdmin"
							id="type"
							required
							value={this.state.user['isAdmin']}
							onChange={this.handleChange}
						>
							<option value="true">True</option>
							<option value="false">False</option>
						</select>

						<label className="new-question" htmlFor="question">
							First Name
						</label>
						<input
							className="new-question-input"
							type="text"
							name="firstName"
							id="question"
							required
							value={this.state.user['firstName']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution1" htmlFor="solution1">
							Last Name
						</label>
						<input
							className="new-solution1-input"
							type="text"
							name="lastName"
							id="solution1"
							required
							value={this.state.user['lastName']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution2" htmlFor="solution2">
							Email
						</label>
						<input
							className="new-solution2-input"
							type="text"
							name="email"
							id="solution2"
							required
							value={this.state.user['email']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution3" htmlFor="solution3">
							Password
						</label>
						<input
							className="new-solution3-input"
							type="text"
							name="password"
							id="solution3"
							required
							value={this.state.user['password']}
							onChange={this.handleChange}
						></input>

						<div className="btn-zone btn-new">
							<button
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

export default EditQuestion;
