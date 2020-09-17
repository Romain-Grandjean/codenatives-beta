import React, { Component } from 'react';
import Footer from '../structure/Footer';

class EditQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {
            id: "",

        };
	}
	render() {
        console.log("Edit question props are", this.props);
        console.log("Edit question ID props is", this.props.id);
		return (
			<>
				<div className="admin-container">
				<h1>{this.id}</h1>
				</div>
				<Footer />
			</>
		);
	}
}

export default EditQuestion;
