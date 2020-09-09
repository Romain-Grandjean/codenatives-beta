// modules
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// databases
import DataPractice from './dataPractice.json';

// components
import Header from './components/structure/Header';
import Home from './components/Home';
import Practice from './components/Practice';
import Test from './components/Test';
import Footer from './components/structure/Footer';
import Admin from './components/Admin';
import NotFound from './components/structure/NotFound';

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
					<Route path="/admin" exact component={Admin} />
					<Route path="/notFound" component={NotFound}></Route>
					<Redirect to="/not-found" />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
