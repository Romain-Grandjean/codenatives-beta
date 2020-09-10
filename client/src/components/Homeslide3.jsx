import React from 'react';
import { Link } from 'react-router-dom';
import BtnLanguage from './common/BtnLanguage';

const Homeslide3 = () => {
	return (
		<div className="slide">
			<img
				id="central-window"
				src={process.env.PUBLIC_URL + '/img/central-window.png'}
				alt=""
			/>
			<div id="central-catchphrase">
				<h1>Become a code native 3</h1>
				<h2>And get exclusive job offers</h2>
				<div className="central-language-selection">
					<span id="language-catchphrase">Choose your language</span>
					<div className="btn-language">
						<img
							id="language-arrow"
							src={
								process.env.PUBLIC_URL +
								'/img/arrow-btn-selector.svg'
							}
							alt=""
						/>
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

export default Homeslide3;
