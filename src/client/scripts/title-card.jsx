
import React from 'react'
import classNames from 'classnames'
import Title from './title.jsx'
/* eslint-disable no-unused-vars */
import __style from '../styles/title-card.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable indent,react/jsx-indent */
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
        </div>)
	}
}
/* eslint-enable indent,react/jsx-indent */
