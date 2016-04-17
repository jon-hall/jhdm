import React from 'react'
/* eslint-disable no-unused-vars */
import __style from '../styles/card.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable indent,react/jsx-indent */
export default class Card extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired
    }

	render() {
		return (<div className='card' title={this.props.description}>
            <span className='card-title'>{this.props.title}</span>
            <img className='card-image' src={this.props.image} />
        </div>)
	}
}
/* eslint-enable indent,react/jsx-indent */
