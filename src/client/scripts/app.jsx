import React from 'react';
import Title from './title.jsx';
import __style from '../styles/app.styl';

export default class App extends React.Component {
	render() {
		return <Title collapsibles={['jon', 'hall']} tld="me" />;
	}
}
