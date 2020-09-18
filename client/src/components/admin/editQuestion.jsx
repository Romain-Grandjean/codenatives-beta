import React, { Component } from 'react';
import Footer from '../structure/Footer';
import { getOneElement } from '../../services/elementsService';
import InputEdit from './inputEdit';

class EditQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: {},
			inputs: ['question', 'answer', 'level'],
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

						<InputEdit
							inputs={this.state.inputs}
							question={this.state.question}
						/>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
