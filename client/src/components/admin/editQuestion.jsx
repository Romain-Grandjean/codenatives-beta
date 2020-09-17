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
		const { data: question } = await getOneElement(this.props.match.params.id);
		this.setState({ question });
		console.log('this is state questions', this.state.question);
	}



	render() {
		return (
			<>
				<div className="admin-container">
					<table className="table-questions">
						<tr key={this.props.match.params.id} className="row">
							<td
								key={this.props.match.params.id}
								className="td1"
							>
								ID:
							</td>
							<td> {this.props.match.params.id}</td>
						</tr>
					</table>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
