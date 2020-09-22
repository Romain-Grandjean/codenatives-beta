import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../structure/Footer';
import { postOneElement } from '../../services/elementsService';

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: {
				question: '',
				solution1: '',
				solution2: '',
				solution3: '',
				solution4: '',
				answer: "1",
				type: 'QCM',
				level: 'A1',
			},
		};
	}

	handleChange = (e) => {
		const question = { ...this.state.question };

		question[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ question });
		console.log({ question });
	};

	handleSubmit = async () => {
		try {
			await postOneElement(this.state.question);

		} catch (error) {
			if (error.response && error.response.status === 404);
		}
		// this.props.history.push('/');
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-new" onSubmit={this.handleSubmit}>
						<div className="new-title-zone">
							<h1 id="new-title">New question</h1>
						</div>

						<label className="new-type" htmlFor="type">
							Type
						</label>
						<select
							className="new-type-input"
							name="type"
							id="type"
							required
							value={this.state.question['type']}
							onChange={this.handleChange}
						>
							<option>QCM</option>
							<option>CODE</option>
						</select>

						<label className="new-level" htmlFor="level">
							Level
						</label>
						<select
							className="new-level-input"
							list="list-level"
							name="level"
							id="level"
							required
							value={this.state.question['level']}
							onChange={this.handleChange}
						>
							{' '}
							<option>A1</option>
							<option>A2</option>
							<option>B1</option>
							<option>C1</option>
							<option>C2</option>
						</select>

						<label className="new-answer" htmlFor="Answer">
							Answer
						</label>
						<select
							className="new-answer-input"
							name="answer"
							id="answer"
							required
							value={parseInt(this.state.question['answer'])}
							onChange={this.handleChange}
						>
							{' '}
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>

						<label className="new-question" htmlFor="question">
							Question
						</label>
						<input
							className="new-question-input"
							type="text"
							name="question"
							id="question"
							required
							value={this.state.question['question']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution1" htmlFor="solution1">
							Solution 1
						</label>
						<input
							className="new-solution1-input"
							type="text"
							name="solution1"
							id="solution1"
							required
							value={this.state.question['solution1']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution2" htmlFor="solution2">
							Solution 2
						</label>
						<input
							className="new-solution2-input"
							type="text"
							name="solution2"
							id="solution2"
							required
							value={this.state.question['solution2']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution3" htmlFor="solution3">
							Solution 3
						</label>
						<input
							className="new-solution3-input"
							type="text"
							name="solution3"
							id="solution3"
							required
							value={this.state.question['solution3']}
							onChange={this.handleChange}
						></input>
						<label className="new-solution4" htmlFor="solution4">
							Solution 4
						</label>
						<input
							className="new-solution4-input"
							type="text"
							name="solution4"
							id="solution4"
							required
							value={this.state.question['solution4']}
							onChange={this.handleChange}
						></input>

						<div className="btn-zone btn-new">
							<button
								className="btn-small btn-yellow btn-padding"
								onSubmit={this.handleSubmit}
							>
								Save
							</button>
							<Link id="new-back" to="/admin">
								back
							</Link>
						</div>
					</form>
				</div>
				<Footer />
			</>
		);
	}
}

export default NewQuestion;
