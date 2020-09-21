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
				<Link to="/admin"> back</Link>
						<h1>New question</h1>
					<form className="admin-new" onSubmit={this.handleSubmit}>
	
						<label className="new-question" for="question">
							Question
						</label>
						<input
							className="new-question-input"
							type="text"
							name="question"
							id="question"
							required
							value={''}
							onChange={this.handleChange}
						></input>
						<label className="new-solution1" for="solution1">
							Solution 1
						</label>
						<input
							className="new-solution1-input"
							type="text"
							name="solution1"
							id="solution1"
							required
							value={''}
							onChange={this.handleChange}
						></input>
						<label className="new-solution2" for="solution2">
							Solution 2
						</label>
						<input
							className="new-solution2-input"
							type="text"
							name="solution2"
							id="solution2"
							required
							value={''}
							onChange={this.handleChange}
						></input>
						<label className="new-solution3" for="solution3">
							Solution 3
						</label>
						<input
							className="new-solution3-input"
							type="text"
							name="solution3"
							id="solution3"
							required
							value={''}
							onChange={this.handleChange}
						></input>
						<label className="new-solution4" for="solution4">
							Solution 4
						</label>
						<input
							className="new-solution4-input"
							type="text"
							name="solution4"
							id="solution4"
							required
							value={''}
							onChange={this.handleChange}
						></input>
						<label className="new-answer" for="Answer">
							Answer
						</label>
						<input
							className="new-answer-input"
							type="number"
							name="Answer"
							id="Answer"
							required
							value={'0'}
							onChange={this.handleChange}
						></input>
						<label className="new-type" for="type">
							Type
						</label>
						<input
							className="new-type-input"
							type="text"
							name="type"
							id="type"
							required
							value={'QCM'}
							onChange={this.handleChange}
						></input>
						<label className="new-level" for="level">
							Level
						</label>
						<input
							className="new-level-input"
							type="text"
							name="level"
							id="level"
							required
							value={'A0'}
							onChange={this.handleChange}
						></input>
						<div className="btn-zone btn-new">
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
