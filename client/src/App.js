// modules
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';

// components

import Home from './components/Home';
import Practice from './components/Practice';
import Test from './components/Test';
import UserInterface from './components/user/userInterface';
import AdminQuestions from './components/AdminQuestions';
import AdminUsers from './components/AdminUsers';
import NewQuestion from './components/admin/newQuestion';
import NewUser from './components/admin/newUser';
import EditQuestion from './components/admin/editQuestion';
import EditUser from './components/admin/editUser';
import NotFound from './components/structure/NotFound';
import Header from './components/structure/Header';

toast.configure();
class App extends React.Component {
	state = {};

	componentDidMount() {
		try {
			const jwt = localStorage.getItem('token');
			const user = jwtDecode(jwt);
			this.setState({ user });
		} catch (error) {}
	}

	render() {
		const { user } = this.state;
		return (
			<>
				<Header user={user} />
				<main className="container">
					<Switch>
						<Route
							path="/account"
							exact
							render={(props) => {
								if (!user) return <Redirect to="/" />;
								return <UserInterface />;
							}}
						/>
						<Route path="/practice" exact component={Practice} />
						<Route path="/test" exact component={Test} />
						<Route
							path="/admin/questions"
							exact
							component={AdminQuestions}
						/>

						<Route
							path="/admin/users"
							exact
							component={AdminUsers}
						/>
						<Route
							path="/admin/questions/new"
							exact
							component={NewQuestion}
						/>
						<Route
							path="/admin/users/new"
							exact
							component={NewUser}
						/>
						<Route
							path="/admin/questions/:id"
							exact
							component={EditQuestion}
						/>
						<Route
							path="/admin/users/:id"
							exact
							component={EditUser}
						/>

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
