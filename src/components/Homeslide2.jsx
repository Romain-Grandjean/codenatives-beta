import React from 'react';
import { Link } from 'react-router-dom';

const Homeslide2 = () => {
	return (
		<div className="slide">
			<img id="central-window2" src={process.env.PUBLIC_URL + '/img/central-window2.png'} alt="" />
			<div id="central-catchphrase">
				<h1>Step by Step, track your progress </h1>
				{/* <h1>And become a native </h1> */}
				<div className="central-language-selection">
					<span id="language-catchphrase">Choose your language</span>
					<div className="btn-language">
						<img id="language-arrow" src={process.env.PUBLIC_URL + '/img/arrow-btn-selector.svg'} alt="" />
						<div className="language-selection">
							<span>Javascript</span>
							<span>HTML/CSS</span>
							<span>React</span>
							<span>Node JS</span>
							<span>Command lines</span>
							<span>Git / Github</span>
							<span>Full stack</span>
						</div>
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

export default Homeslide2;
