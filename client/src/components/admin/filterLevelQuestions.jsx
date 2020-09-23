import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const FilterLevelQuestions = (props) => {
	return (
		<>
			<ul className="admin-filter">
				<Link to="admin/questions/new" className="btn-big btn-yellow">
					New
				</Link>
				<li className="btn-big btn-nocolor ">all</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					A1
				</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					A2
				</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					A1
				</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					B2
				</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					C1
				</li>
				<li
					className="btn-big btn-nocolor "
					onClick={props.filterClick}
				>
					C2
				</li>
			</ul>
		</>
	);
};

export default FilterLevelQuestions;
