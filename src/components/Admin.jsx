import React, { Component } from 'react';
import Filter from './admin/filter';

class Admin extends Component {
	render() {
		return (
			<>
				<div className="admin-container">
					<h1>Admin</h1>
                    <Filter/>
				</div>
			</>
		);
	}
}

export default Admin;
