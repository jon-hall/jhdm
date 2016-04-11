import React from 'react';
import __style from '../styles/title.styl';
const map = Array.prototype.map;

export default class Title extends React.Component {
    constructor() {
        super();
    }

    static propTypes = {
        collapsibles: React.PropTypes.array.isRequired,
        tld: React.PropTypes.string.isRequired
    }

	render() {
        const collapsibles = this.props.collapsibles.map((word, i) =>
            (<span key={i} className="collapsible-word">
                {word[0]}<span className="collapsible-body">{word.slice(1)}</span>
            </span>)
        );

		return <div className="title">
            {collapsibles}
            <span className="dot-wrap"><span className="dot">.</span></span>
            <span className="tld">{this.props.tld}</span>
        </div>;
	}
}
