import React, { Component } from 'react';
import FilterLevel from './admin/filterLevel';
import Table from './admin/table';
import Footer from './structure/Footer';
import { getQuestions } from '../services/questionsService';


class Admin extends Component {
	state = {
		questions: [],
	};

	async componentDidMount() {
		const questions = await getQuestions();
		this.setState({ questions: questions });
		console.log('this is state questions', this.state.questions);
	}
	
	render() {
		return (
			<>
				<div className="admin-container">
					<ul className="admin-select">
						<a>Questions Admin</a>
						<span>-</span>
						<a>User Admin</a>
					</ul>
					<FilterLevel />
					<Table data={this.state.questions}/>
				</div>
				<Footer />
			</>
		);
	}
}

export default Admin;
