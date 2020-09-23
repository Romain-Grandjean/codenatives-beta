import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FilterLevel from './admin/filterLevel';
import Table from './admin/table';
import Footer from './structure/Footer';
import { getElements, deleteElement } from '../services/elementsService';
import { toast } from 'react-toastify';

toast.configure();
class AdminQuestions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			filter: 'all',
		};
	}

	async componentDidMount() {
		const { data: questions } = await getElements();
		this.setState({ questions });
		console.log(
			'this is state questions before filter clicked',
			this.state.questions
		);
	}

	filterClick = () => {
		this.setState({ filter: 'C1' });
		console.log('this is state filter', this.state.filter);

		const questions = this.state.questions.filter(
			(ele) => ele.level === this.state.filter
		);
		this.setState({ questions });

		console.log(
			'this is state questions after clicked',
			this.state.questions
		);
	};

	handleDelete = async (element) => {
		const actualElements = this.state.questions;
		const questions = actualElements.filter((ele) => ele._id !== element);
		this.setState({ questions });

		try {
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
					{/* <ul className="admin-select">
						<li>
							<NavLink to="">QUESTIONS DB</NavLink>
						</li>
						<li>
							<span>-</span>
						</li>
						<li>
							<NavLink to="">USERS DB</NavLink>
						</li>
					</ul> */}
					<FilterLevel filterClick={this.filterClick} />
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

export default AdminQuestions;
