import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './structure/Footer';
import TableUsers from './admin/tableUsers';
import FilterLevelUsers from './admin/filterLevelUsers';
import { getElements, deleteElement } from '../services/usersService';
import { toast } from 'react-toastify';

toast.configure();
class AdminUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		};
	}

	async componentDidMount() {
		const { data: users } = await getElements();
		this.setState({ users });
		console.log(
			'this is state questions before filter clicked',
			this.state.users
		);
	}

	handleDelete = async (element) => {
		const actualElements = this.state.users;
		const users = actualElements.filter((ele) => ele._id !== element);
		this.setState({ users });

		try {
			console.log('this is element handle delete', element);
			await deleteElement(element);
		} catch (error) {
			if (error.response && error.response.status === 404)
				toast.error('This element has already been deleted');
		}
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<FilterLevelUsers filterClick={this.filterClick} />
					<TableUsers
						data={this.state.users}
						onDelete={this.handleDelete}
					/>
				</div>
				<Footer />
			</>
		);
	}
}

export default AdminUsers;
