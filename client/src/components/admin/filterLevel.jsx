import React, { Component } from 'react';

class FilterLevel extends Component {
	state = {};
	render() {
		return (
			<>
				<ul className="admin-filter">
					<button className="btn-big btn-yellow">New</button>
					<li className="btn-big btn-nocolor ">all</li>
					<li className="btn-big btn-nocolor ">A1</li>
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
