import React, { Component } from 'react';
import DataPractice from '../../dataPractice.json';

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

					{DataPractice.map((e) => (
						<tr>
							<td>{e.id}</td>
							<td>A1</td>
                            <td>QCM</td>
                            <td>practice</td>
                            <td>18.05.20</td>
                            <td>18.05.20</td>
                            <td> <button>Edit</button></td>
                            <td> <button>Delete</button></td>
						</tr>
					))}
				</div>
			</>
		);
	}
}

export default Table;
