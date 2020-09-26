import React from 'react';
import LoginRegister from '../login/LoginRegister';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'active',
		};
	}
	login = () => {
		console.log('login fired');

	} 
	register = () => {
		console.log('register fired');
	}


	render() {
		return (
			<>
			<div className="header">
				<Link to="" id="logo-header">
					<img
						src={process.env.PUBLIC_URL + '/img/logo_header.png'}
						alt="logo"
					/>
				</Link>

				<nav className="navigation">
					<input type="checkbox" />

					<div className="line1"></div>
					<div className="line2"></div>

					<div className="nav1">
						<NavLink to="" className="nav1-elements">Concept</NavLink>
						<NavLink to="" className="nav1-elements">Contribute</NavLink>
						<NavLink to="" className="nav1-elements">
							For Schools & Recruiters
						</NavLink>
						<div className="line-nav"></div>
					</div>
					<div className="nav2">
						<button className="nav2-elements" onClick={this.login}>Login</button>
						<button className="button-signup" onClick={this.register}>Sign Up</button>
					</div>
				</nav>
				<div className="line-header"></div>
			</div>
			<LoginRegister display={this.state.display}/>
			</>
		);
	}
}

export default Header;
