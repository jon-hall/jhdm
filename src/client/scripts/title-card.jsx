import React from 'react';
import classNames from 'classnames';
import Title from './title.jsx';
import __style from '../styles/title-card.styl';
const map = Array.prototype.map;

export default class TitleCard extends React.Component {
    static propTypes = {
        collapsed: React.PropTypes.bool.isRequired,
        focused: React.PropTypes.bool.isRequired
    }

	render() {
		return (<div className={classNames({
            'title-card': true,
            focused: this.props.focused,
            collapsed: this.props.collapsed
        })}>
            <Title {...this.props} />
        </div>);
	}
}
