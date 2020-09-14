import React, { Component } from 'react';
import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({data, value})=> {

		return (
			<table className="table">
				<TableHeader />
				<TableBody data={data} />
			</table>
        );
}


export default Table;
