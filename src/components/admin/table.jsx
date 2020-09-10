import React, { Component } from 'react';

class Table extends Component {
	state = {};
	render() {
		return (
			<>
				<div className="table-questions">
					<thead>
						<th>ID</th>
						<th>Level</th>
						<th>Type</th>
						<th>Practice / Test</th>
						<th>Date of creation</th>
						<th>Last update</th>
						<th>Edit</th>
                        <th>Delete</th>
					</thead>
				</div>
			</>
		);
	}
}

export default Table;
