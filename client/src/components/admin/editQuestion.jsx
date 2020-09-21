import React, { Component } from 'react';
import Footer from '../structure/Footer';
import { getOneElement, deleteElement, putOneElement } from '../../services/elementsService';
import { toast } from 'react-toastify';

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
		delete question.type;
		delete question.explanations;
		this.setState({ question });
		console.log('this is state question', this.state.question);
	}

	handleSubmit = (e) => {
		e.preventDefault();
	};

	handleChange = (e) => {
		const question = { ...this.state.question };

		question[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ question });
	};

	handleSubmit = async (element) => {

		try {
			await putOneElement(element);
		} catch (error) {
			if (error.response && error.response.status === 404)
				toast.error('This element has already been deleted');
		}

	}

	handleDelete = async (element) => {
		try {
			await deleteElement(element);
		} catch (error) {
			if (error.response && error.response.status === 404)
				toast.error('This element has already been deleted');
		}
	};

	render() {
		return (
			<>
				<div className="admin-container">
					<form className="admin-edit" onSubmit={this.handleSubmit}>
						<h1>Question ID: {this.props.match.params.id}</h1>
						{Object.keys(this.state.question).map((key) => (
							<div>
								<label for={key}>{key}</label>
								<input
									type="text"
									name={key}
									id={key}
									required
									value={this.state.question[key]}
									onChange={this.handleChange}
								></input>
							</div>
						))}
						<div className="btn-zone">
							<button
								className="btn-small btn-red btn-padding"
								onClick={() =>
									this.onDelete(this.props.match.params.id)
								}
							>
								Delete
							</button>
							<button className="btn-small btn-yellow btn-padding" onSubmit={this.handleSubmit(this.props.match.params.id)}>
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

export default EditQuestion;
