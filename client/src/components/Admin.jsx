import React, { Component } from 'react';
import FilterLevel from './admin/filterLevel';
import Table from './admin/table';
import Footer from './structure/Footer';
import { getElements, deleteElement } from '../services/elementsService';
import { toast } from 'react-toastify';


toast.configure()
class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
		};
	}

	async componentDidMount() {
		const { data: questions } = await getElements();
		this.setState({ questions });
		console.log('this is state questions', this.state.questions);
		toast("db working !!");
	}

	handleDelete = async (element) => {

		toast("delete btn fired !!")
		const actualElements = this.state.questions;
		const questions = actualElements.filter(
			(ele) => ele._id !== element._id
		);
		this.setState({ questions });

		try {
			await deleteElement(element._id);
		} catch (error) {
			if (error.response && error.response.status === 404)
				toast.error('This element has already been deleted');
		}
	};

	render() {

		return (
			<>
				<div className="admin-container">
					<ul className="admin-select">
						<li>
							<a>QUESTIONS DB</a>
						</li>
						<li>
							<span>-</span>
						</li>
						<li>
							<a>USERS DB</a>
						</li>
					</ul>
					<FilterLevel />
					<Table
						data={this.state.questions}
						onDelete={this.handleDelete}

					/>
				</div>
				<Footer />
			</>
		);
	}
}

export default Admin;
