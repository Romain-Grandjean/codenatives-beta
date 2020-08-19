// modules
import React from 'react';
import Homeslide1 from './Homeslide1';
import Homeslide2 from './Homeslide2';
import Homeslide3 from './Homeslide3';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeScreen: <Homeslide1 />,
			value: 1,
		};
	}

	componentDidMount() {
		setInterval(() => {
			let valueNext;
			switch (this.state.value) {
				case 1:
					this.setState({ ...this.state, value: 2, activeScreen: <Homeslide2 /> });
					break;
				case 2:
					this.setState({ ...this.state, value: 3, activeScreen: <Homeslide3 /> });
					break;
				case 3:
					this.setState({ ...this.state, value: 1, activeScreen: <Homeslide1 /> });
					break;
			}
		}, 5000);
	}

	// Slide left
	slideLeft = () => {
		let activeScreen = this.state.value;
		if (activeScreen === 2) {
			this.setState({ ...this.state, activeScreen: <Homeslide1 />, value: 1 });
		}
		if (activeScreen === 1) {
			this.setState({ ...this.state, activeScreen: <Homeslide3 />, value: 3 });
		}
		if (activeScreen === 3) {
			this.setState({ ...this.state, activeScreen: <Homeslide2 />, value: 2 });
		}
	};

	// Slide right
	slideRight = () => {
		let activeScreen = this.state.value;
		if (activeScreen === 2) {
			this.setState({ ...this.state, activeScreen: <Homeslide3 />, value: 3 });
		}
		if (activeScreen === 3) {
			this.setState({ ...this.state, activeScreen: <Homeslide1 />, value: 1 });
		}
		if (activeScreen === 1) {
			this.setState({ ...this.state, activeScreen: <Homeslide2 />, value: 2 });
		}
	};

	// 3 dots button

	activateDot = (id) => {
		switch (id) {
			case 'd01':
				this.setState({ ...this.state, activeScreen: <Homeslide1 />, value: 1 });
				break;
			case 'd02':
				this.setState({ ...this.state, activeScreen: <Homeslide2 />, value: 2 });
				break;
			case 'd03':
				this.setState({ ...this.state, activeScreen: <Homeslide3 />, value: 3 });
				break;
		}
	};

	render() {
		return (
			<div className="home-page">
				<div className="slider-content">
					<button onClick={() => this.slideLeft()}>
						<img id="arrow-left-home" src={process.env.PUBLIC_URL + '/img/arrow-left-home.png'} alt="" />
					</button>
					{this.state.activeScreen}
					<button onClick={() => this.slideRight()}>
						<img id="arrow-right-home" src={process.env.PUBLIC_URL + '/img/arrow-right-home.png'} alt="" />
					</button>
				</div>
				<div className="dots-selectors">
					<button id="d01" onClick={() => this.activateDot('d01')}>
						<div id="dot1" style={{ backgroundColor: this.state.value === 1 ? 'black' : 'white' }}></div>
					</button>
					<button id="d02" onClick={() => this.activateDot('d02')}>
						<div id="dot2" style={{ backgroundColor: this.state.value === 2 ? 'black' : 'white' }}></div>
					</button>
					<button id="d03" onClick={() => this.activateDot('d03')}>
						<div id="dot3" style={{ backgroundColor: this.state.value === 3 ? 'black' : 'white' }}></div>
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
