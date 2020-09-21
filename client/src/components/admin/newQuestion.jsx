import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../structure/Footer';
import { postOneElement } from '../../services/elementsService';

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	async componentDidMount() {}

	handleChange = (e) => {
		const question = { ...this.state.question };

		question[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ question });
	};

	handleSubmit = async (id, element) => {
		try {
			await postOneElement(element);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-edit" onSubmit={this.handleSubmit}>
						<Link to="/admin"> back</Link>
						<label for="question">Question</label>
						<input
							type="text"
							name="question"
							id="question"
							required
							value={this.state.question}
							onChange={this.handleChange}
						></input>
						<div className="btn-zone">
							<button
								className="btn-small btn-yellow btn-padding"
								onSubmit={this.handleSubmit(
									this.props.match.params.id,
									this.state.question
								)}
							>
								Save
							</button>
						</div>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default NewQuestion;
