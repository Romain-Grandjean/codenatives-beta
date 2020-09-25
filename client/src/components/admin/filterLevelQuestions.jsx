import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FilterLevelQuestions = (props) => {
	const { name } = props;
	return (
		<>
			<ul className="admin-filter">
				<Link to="/admin/questions/new" className="btn-big btn-yellow">
					New
				</Link>
				<li
					className="btn-big btn-nocolor "
					name="all"
					onClick={props.filterClick}
				>
					all
				</li>
				<li
					className="btn-big btn-nocolor "
					name="A1"
					onClick={props.filterClick}
				>
					A1
				</li>
				<li
					className="btn-big btn-nocolor "
					name="A2"
					onClick={props.filterClick}
				>
					A2
				</li>
				<li
					className="btn-big btn-nocolor "
					name="B1"
					onClick={props.filterClick}
				>
					B1
				</li>
				<li
					className="btn-big btn-nocolor "
					name="B2"
					onClick={props.filterClick}
				>
					B2
				</li>
				<li
					className="btn-big btn-nocolor "
					name="C1"
					onClick={props.filterClick}
				>
					C1
				</li>
				<li
					className="btn-big btn-nocolor "
					name="C2"
					onClick={props.filterClick}
				>
					C2
				</li>
			</ul>
		</>
	);
};

export default FilterLevelQuestions;
