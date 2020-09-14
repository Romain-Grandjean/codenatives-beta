import React, { Component } from 'react';
import Table from './table';

class AdminElements extends Component {

	render() {
		return (
			<>
				<table className="table-questions">
					<Table data={this.state.questions} />
				</table>
			</>
		);
	}
}

export default AdminElements;
