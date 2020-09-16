import React, { Component } from 'react';

const TableBody = (props) => {
	const createKey = (item) => {
		let indexEle = props.data.indexOf(item);

		return indexEle;
	};

	return (
		<tbody>
			{props.data.map((item) => (
				<tr id="tr" key={createKey(item)} className="row">
					<td key={createKey(item)} className="td1">
						{item._id}
					</td>
					<td key={createKey(item)} className="td2">
						{item.level}
					</td>
					<td key={createKey(item)} className="td3">
						{item.type}
					</td>
					<td key={createKey(item)} className="td4">
						{item.question}
					</td>
					<td>
						<button
							key={createKey(item)}
							className="btn-small btn-nocolor"
						>
							Edit
						</button>
					</td>
					<td>
						<button
							key={createKey(item)}
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
