import React, { Component } from 'react';
import Footer from '../structure/Footer';
import { getOneElement } from '../../services/elementsService';

class EditQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: {},
		};
	}

	async componentDidMount() {
		const { data: question } = await getOneElement(
			this.props.match.params.id
		);
		this.setState({ question });
		console.log('this is state questions', this.state.question);
	}
	displaySolutions = () => {
		const solutions = this.state.solutions;
		return solutions.map((e) => e);
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-edit">
						<label for="id">ID: </label>
						<input
							type="text"
							name="id"
							id="id"
							required
							readOnly
							value={this.props.match.params.id}
						></input>
						<label for="question">Question: </label>
						<input
							type="text"
							name="question"
							id="question"
							required
							value={this.state.question.question}
						></input>
						<label for="answer">Solutions: </label>
						<input
							type="text"
							name="answer"
							id="answer"
							required
							value={this.displaySolutions}
						></input>
						<label for="answer">Answer: </label>
						<input
							type="text"
							name="answer"
							id="answer"
							required
							value={this.state.question.answer}
						></input>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
