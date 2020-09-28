import React from 'react';
import { Link } from 'react-router-dom';

const TableBodyUsers = (props) => {
	const createKey = (item, type) => {
		let indexEle = props.data.indexOf(item);
		return indexEle + type;
	};
	console.log('these are users tableBody props:', props);

	return (
		<tbody>
			{props.data.map((item) => (
				<tr key={createKey(item, item._id)} className="row">
					<td key={createKey(item, item._id)} className="utd1">
						{item._id}
					</td>
					<td key={createKey(item, item.firstName)} className="utd2">
						{item.firstName}
					</td>
					<td key={createKey(item, item.lastName)} className="utd3">
						{item.lastName}
					</td>
					<td key={createKey(item, item.email)} className="utd4">
						{item.email}
					</td>
					<td key={createKey(item, item.creationDate)} className="utd5">
						{item.creationDate}
					</td>
					<td key={createKey(item, item.lastUpdate)} className="utd6">
						{item.lastUpdate}
					</td>
					<td key={createKey(item, item.isAdmin)} className="utd7">
						{item.isAdmin}
					</td>
					<td key={createKey(item, item.password)} className="utd8">
						{item.password}
					</td>
					<td>
						<Link
							key={createKey(item, 'btn-edit')}
							className="btn-small btn-nocolor"
							to={`/admin/users/${item._id}`}
						>
							Edit
						</Link>
					</td>
					<td>
						<button
							key={createKey(item, 'btn-delete')}
							className="btn-small btn-red"
							onClick={() => props.onDelete(item._id)}
						>
							Delete
						</button>
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default TableBodyUsers;
