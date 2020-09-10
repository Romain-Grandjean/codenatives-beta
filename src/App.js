// modules
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components

import Home from './components/Home';
import Practice from './components/Practice';
import Test from './components/Test';
import Admin from './components/Admin';
import NotFound from './components/structure/NotFound';
import Header from './components/structure/Header';


class App extends React.Component {
	render() {
		return (
			<>
				<Header />
				<main className="container">
					<Switch>
						<Route path="/practice" exact component={Practice} />
						<Route path="/test" exact component={Test} />
						<Route path="/admin" exact component={Admin} />
						<Route path="/" component={Home} />
						<Route path="/notFound" component={NotFound}></Route>
						<Redirect to="/" />
					</Switch>
				</main>

			</>
		);
	}
}

export default App;
