import React from 'react'
/* eslint-disable no-unused-vars */
import __style from '../styles/title-bar.styl'
/* eslint-enable no-unused-vars */

/* eslint-disable indent */
export default class TitleCard extends React.Component {
	render() {
        /* eslint-disable react/prop-types */
		return (<div className='title-bar'>{this.props.children}</div>)
        /* eslint-enable react/prop-types */
	}
}
/* eslint-enable indent */
