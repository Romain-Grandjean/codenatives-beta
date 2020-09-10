import React, { Component } from 'react';
import FilterLevel from './admin/filterLevel';
import Table from './admin/table';
import Footer from './structure/Footer';

class Admin extends Component {
	render() {
		return (
			<>
				<div className="admin-container">
					<ul className="admin-select">
						<a>Questions Admin</a>
						<span>-</span>
						<a>User Admin</a>
					</ul>
					<FilterLevel />
					<Table />
				</div>
				<Footer />
			</>
		);
	}
}

export default Admin;
