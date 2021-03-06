import React, { Component } from 'react';
import FilterLevelQuestions from './admin/filterLevelQuestions';
import TableQuestions from './admin/tableQuestions';
import Footer from './structure/Footer';
import { getElements, deleteElement } from '../services/questionsService';
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

	filterClick = async (e) => {
		const levelSelected = e.currentTarget.innerHTML;
		console.log('this e.currentTarget.name', levelSelected)
		await this.setState({ filter: levelSelected });
		console.log('this is state filter', this.state.filter);

		if (levelSelected === 'all') {
			const { data: questions } = await getElements();
			this.setState({ questions });
		} else {
			const questions = this.state.questions.filter(
				(ele) => ele.level === this.state.filter
			);
			this.setState({ questions });

			console.log(
				'this is state questions after clicked',
				this.state.questions
			);
		}
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
					<FilterLevelQuestions filterClick={this.filterClick}/>
					<TableQuestions
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
