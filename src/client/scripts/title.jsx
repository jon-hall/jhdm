import React from 'react';
import classNames from 'classnames';
import __style from '../styles/title.styl';
const map = Array.prototype.map;

export default class Title extends React.Component {
    static propTypes = {
        collapsed: React.PropTypes.bool.isRequired,
        hoverActive: React.PropTypes.bool.isRequired,
        collapsibles: React.PropTypes.array.isRequired,
        tld: React.PropTypes.string.isRequired
    }

	render() {
        const collapsibles = this.props.collapsibles.map((word, i) =>
            (<span key={i} className="collapsible-word">
                {word[0]}<span className="collapsible-body">{word.slice(1)}</span>
            </span>)
        );

		return <div className={classNames({
            'title': true,
            'hover-active': this.props.hoverActive,
            collapsed: this.props.collapsed
        })}>
            {collapsibles}
            <span className="dot-wrap"><span className="dot">.</span></span>
            <span className="tld">{this.props.tld}</span>
        </div>;
	}
}
