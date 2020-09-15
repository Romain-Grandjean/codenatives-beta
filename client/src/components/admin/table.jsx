import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';


const Table = (props) => {
	return (
		<table className="table-questions">
			<TableHeader />
			<TableBody data={props.data} />
		</table>
	);
};

export default Table;
