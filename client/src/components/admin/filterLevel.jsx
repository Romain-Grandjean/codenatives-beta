import React, { Component } from 'react';

class FilterLevel extends Component {
	state = {};
	render() {
		return (
			<>
				<ul className="admin-filter">
					<button className="btn-big">New</button>
					<li>all</li>
					<li>A1</li>
					<li>A2</li>
					<li>B1</li>
					<li>B2</li>
					<li>C1</li>
					<li>C2</li>
				</ul>
			</>
		);
	}
}

export default FilterLevel;
