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
							value={'hello'}
							onChange={this.handleChange}
						></input>
						<label for="solution1">Solution 1</label>
						<input
							type="text"
							name="solution1"
							id="solution1"
							required
							value={'hello'}
							onChange={this.handleChange}
						></input>
						<label for="solution2">Solution 2</label>
						<input
							type="text"
							name="solution2"
							id="solution2"
							required
							value={'hello'}
							onChange={this.handleChange}
						></input>
						<label for="solution3">Solution 3</label>
						<input
							type="text"
							name="solution3"
							id="solution3"
							required
							value={'hello'}
							onChange={this.handleChange}
						></input>
						<label for="solution4">Solution 4</label>
						<input
							type="text"
							name="solution4"
							id="solution4"
							required
							value={'hello'}
							onChange={this.handleChange}
						></input>
						<label for="Answer">Answer</label>
						<input
							type="number"
							name="Answer"
							id="Answer"
							required
							value={'0'}
							onChange={this.handleChange}
						></input>
						<label for="type">Type</label>
						<input
							type="text"
							name="type"
							id="type"
							required
							value={'QCM'}
							onChange={this.handleChange}
						></input>
						<label for="level">Level</label>
						<input
							type="text"
							name="level"
							id="level"
							required
							value={'A0'}
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
