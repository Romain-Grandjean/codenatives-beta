import React, { Component } from 'react';

const TableBody = (props) => {
	const createKey = (item, type) => {
		let indexEle = props.data.indexOf(item);

		return indexEle + type;
	};

	return (
		<tbody>
			{props.data.map((item) => (
				<tr key={createKey(item)} className="row">
					<td key={createKey(item, item._id)} className="td1">
						{item._id}
					</td>
					<td key={createKey(item, item.level)} className="td2">
						{item.level}
					</td>
					<td key={createKey(item, item.type)} className="td3">
						{item.type}
					</td>
					<td key={createKey(item, item.question)} className="td4">
						{item.question}
					</td>
					<td>
						<button
							key={createKey(item, 'btn-edit')}
							className="btn-small btn-nocolor"
						>
							Edit
						</button>
					</td>
					<td>
						<button
							key={createKey(item, 'btn-delete')}
							className="btn-small btn-red"
						>
							Delete
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
