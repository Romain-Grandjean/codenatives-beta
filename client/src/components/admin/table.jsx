import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';


const Table = (props) => {
	console.log("these are the props within table:",props);
	return (
		<table className="table-questions">
			<TableHeader />
			<TableBody data={props.data} onDelete={props.onDelete}/>
		</table>
	);
};

export default Table;
