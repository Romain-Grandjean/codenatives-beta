import React, { Component } from 'react';
import Footer from '../structure/Footer';
import { getOneElement } from '../../services/elementsService';

class EditQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: {},
			question: {},
		};
	}

	async componentDidMount() {
		const { data: question } = await getOneElement(
			this.props.match.params.id
		);

		delete question.__v;
		delete question._id;
		this.setState({ question });
		console.log('this is state question', this.state.question);
	}

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-edit">
						<h1>Question ID: {this.props.match.params.id}</h1>
						{
						Object.keys(this.state.question).map((key) => (
							
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
