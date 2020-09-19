import React, { Component } from 'react';
import Footer from '../structure/Footer';
import { getOneElement } from '../../services/elementsService';
import InputEdit from './inputEdit';

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
		console.log('this is state question', this.state.question);
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
						{Object.keys(this.state.question).map((key) => (
							<div>
								<label for={key}>{key}</label>
								<input
									type="text"
									name={key}
									id={key}
									required
									value={this.state.question[key]}
								></input>
							</div>
						))}
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
