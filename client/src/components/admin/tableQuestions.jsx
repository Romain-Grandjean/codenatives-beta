import React from 'react';
import TableHeaderQuestions from './tableHeaderQuestions';
import TableBodyQuestions from './tableBodyQuestions';

const Table = (props) => {
	console.log('these are the props within table:', props);
	return (
		<table className="table-questions">
			<TableHeaderQuestions />
			<TableBodyQuestions data={props.data} onDelete={props.onDelete} />
		</table>
	);
};

export default Table;
