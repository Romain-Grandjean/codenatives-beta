// modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// databases
import DataPractice from './dataPractice.json';
import DataTest from './dataTest.json';

// components
import Header from './components/Header';
import Home from './components/Home';
import Practice from './components/Practice';
import Test from './components/Test';
import Footer from './components/Footer.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: DataPractice,
		};
	}
	render() {
		return (
			<React.Fragment>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/practice" exact component={Practice} />
					<Route path="/test" exact component={Test} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
