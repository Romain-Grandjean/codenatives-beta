import React, { Component } from 'react';
import Footer from '../structure/Footer';

class NewQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
            id: "",

        };
	}
	render() {
        console.log("New question props are", this.props);
        console.log("New question ID props is", this.props.id);
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
