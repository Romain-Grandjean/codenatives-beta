// Frameworks Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// JS & CSS Modules
import './scss/main.scss';
import App from './App';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('app')
);