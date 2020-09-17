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

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="table-questions">
						<label>Question</label>
						<input label="Question" type="text">
							<textarea>{this.state.question.question}</textarea>
						</input>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
