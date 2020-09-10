import React, { Component } from 'react';
import FilterLevel from './admin/filterLevel';

class Admin extends Component {
	render() {
		return (
			<>
				<div className="admin-container">
					<h1>Questions admin</h1>
                    <FilterLevel/>
                    
				</div>
			</>
		);
	}
}

export default Admin;
