import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilterLevel extends Component {
	state = {};
	render() {
		return (
			<>
				<ul className="admin-filter">
					<Link to="admin/questions/new" className="btn-big btn-yellow">New</Link>
					<li className="btn-big btn-nocolor ">all</li>
					<li className="btn-big btn-nocolor " onClick={this.props.a1Filtered}>A1</li>
					<li className="btn-big btn-nocolor ">A2</li>
					<li className="btn-big btn-nocolor ">B1</li>
					<li className="btn-big btn-nocolor ">B2</li>
					<li className="btn-big btn-nocolor ">C1</li>
					<li className="btn-big btn-nocolor ">C2</li>
				</ul>
			</>
		);
	}
}

export default FilterLevel;
