import React from 'react';
import { Link } from 'react-router-dom';

const TableBodyUsers = (props) => {
	const createKey = (item, type) => {
		let indexEle = props.data.indexOf(item);
		return indexEle + type;
	};
	console.log('these are tableBody props:', props);

	return (
		<tbody>
			{props.data.map((item) => (
				<tr key={createKey(item, item._id)} className="row">
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
						<Link
							key={createKey(item, 'btn-edit')}
							className="btn-small btn-nocolor"
							to={`/admin/questions/${item._id}`}
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
