import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="line-footer"></div>
				<img id="logo-footer" src={process.env.PUBLIC_URL + '/img/logo_footer_white.png'} alt="logo" />
				<div className="socialsNetwork-icons">
					<img id="icon-facebook" src={process.env.PUBLIC_URL + '/img/icon-facebook-white.png'} alt="logo" />
					<img id="icon-linkedin" src={process.env.PUBLIC_URL + '/img/icon-linkedin-white.png'} alt="logo" />
					<img id="icon-twitter" src={process.env.PUBLIC_URL + '/img/icon-twitter.png'} alt="logo" />
				</div>
			</div>
		);
	}
}

export default Footer;
