import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<Link to="" id="logo-header">
					<img src={process.env.PUBLIC_URL + '/img/logo_header.png'} alt="logo" />
				</Link>

				<nav className="navigation">
					<input type="checkbox" />

					<div className="line1"></div>
					<div className="line2"></div>

					<div className="nav1">
						<a className="nav1-elements">Concept</a>
						<a className="nav1-elements">Contribute</a>
						<a className="nav1-elements">For Schools & Recruiters</a>
						<div className="line-nav"></div>
					</div>
					<div className="nav2">
						<a className="nav2-elements">Login</a>
						<button className="button-signup">Sign Up</button>
					</div>
				</nav>
				<div className="line-header"></div>
			</div>
		);
	}
}

export default Header;
