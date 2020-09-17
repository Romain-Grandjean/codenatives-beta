import React, { Component } from 'react';
import Footer from '../structure/Footer';

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {


        };
	}
	render() {

		return (
			<>
				<div className="admin-container">
					<h1>New question</h1>
				</div>
				<Footer />
			</>
		);
	}
}

export default NewQuestion;
