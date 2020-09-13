import React, { Component } from 'react';
import DataPractice from '../../dataPractice.json';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../services/questionsService';

class Table extends Component {
	state = {
		questions: [],
	};

	async componentDidMount() {

		const questions = await getQuestions();
		this.setState({ questions: questions });
		console.log(this.state.questions)
	}

	render() {
		return (
			<>
				<div className="table-questions">
					<thead>
						<th>ID</th>
						<th>Level</th>
						<th>Type</th>
						<th>question</th>
						<th>Edit</th>
						<th>Delete</th>
					</thead>
{/* 
					{this.state.questions.map((e) => (
						<tr>
							<td>{e._id}</td>
							<td>{e.level}</td>
							<td>{e.type}</td>
							<td>{e.question}</td>
							<td>
								{' '}
								<button>Edit</button>
							</td>
							<td>
								{' '}
								<button>Delete</button>
							</td>
						</tr>
					))} */}
				</div>
			</>
		);
	}
}

export default Table;
