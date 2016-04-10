import React from 'react';
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
                {
                    map.call(word, (character, i2) =>
                        (<span key={i2} className="collapsible-char">{character}</span>))
                }
            </span>)
        );

		return <div className="title">
            {collapsibles}
            <span className="dot-wrap"><span className="dot">.</span></span>
            <span className="tld">{this.props.tld}</span>
        </div>;
	}
}
