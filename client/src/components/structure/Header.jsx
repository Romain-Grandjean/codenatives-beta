import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
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
						<NavLink to="" className="nav2-elements">Login</NavLink>
						<button className="button-signup">Sign Up</button>
					</div>
				</nav>
				<div className="line-header"></div>
			</div>
		);
	}
}

export default Header;
