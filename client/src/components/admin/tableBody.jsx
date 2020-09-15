import React, { Component } from 'react';

const TableBody = (props) => {
	return (
		<tbody>
			{props.data.map((item) => (
				<tr>
					<td>{item._id}</td>
					<td>{item.level}</td>
					<td>{item.type}</td>
					<td>{item.question}</td>
					<td>
						<button className="btn-small btn-nocolor">Edit</button>
					</td>
					<td>
						<button className="btn-small btn-red">Delete</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
