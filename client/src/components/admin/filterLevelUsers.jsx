import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FilterLevelQuestions = (props) => {
	return (
		<>
			<ul className="admin-filter">
				<Link to="admin/users/new" className="btn-big btn-yellow">
					New
				</Link>
				
			</ul>
		</>
	);
};

export default FilterLevelQuestions;
