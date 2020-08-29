import React from 'react';
import { Link } from 'react-router-dom';
import BtnLanguage from './buttons/BtnLanguage';

const Homeslide1 = () => {
	return (
		<div className="slide">
			<img id="central-window" src={process.env.PUBLIC_URL + '/img/central-window.png'} alt="" />
			<div id="central-catchphrase">
				<h1>How well do you 'speak' code?</h1>
				<h2>30 questions, 300 seconds to find out !!</h2>
				<div className="central-language-selection">
					<span id="language-catchphrase">Choose your language</span>
					<div className="btn-language">
						<img id="language-arrow" src={process.env.PUBLIC_URL + '/img/arrow-btn-selector.svg'} alt="" />
							<BtnLanguage />
					</div>
				</div>
				<div className="central-buttons">
					<Link to="/practice" className="button-practice">
						<div>Practice</div>
					</Link>
					<Link to="/test" className="button-test">
						<div>Start test</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Homeslide1;
