import React, { Component } from 'react';

class TableBody extends Component {
	render() {
		const { data } = this.props;
		return (
			<tbody>
			{data.map((item) => (
				<tr key={item._id}>

				<td key={item._id + 1 }>{item.level}</td>
				<td key={item._id + 2 }>{item.type}</td>
				</tr>
			))}
		</tbody>
		);
	}
}

export default TableBody;
