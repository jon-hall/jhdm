import React from 'react';
import TitleCard from './title-card.jsx';
import __style from '../styles/app.styl';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			focusTitle: true,
			collapsed: false,
			hoverActive: false
		};
	}

	componentDidMount() {
		let baseDelay = 3000;

		// Start the collapsed transition 2s after mounting
		setTimeout(() => this.setState({ collapsed: true }), baseDelay);

		// Start the title transition +2s after starting collapsing
		setTimeout(() => this.setState({ focusTitle: false }), baseDelay + 2000);

		// Start the in-place state +2s after starting position transition
		setTimeout(() => this.setState({ hoverActive: true }), baseDelay + 2000);
	}

	render() {
		return (<TitleCard
			focused={this.state.focusTitle}
			collapsed={this.state.collapsed}
			hoverActive={this.state.hoverActive}
			collapsibles={['jon', 'hall']}
			tld="me" />);
	}
}
