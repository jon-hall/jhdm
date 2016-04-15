import React from 'react'
import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from '../styles/title.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable indent,react/jsx-indent */
export default class Title extends React.Component {
    static propTypes = {
        collapsed: React.PropTypes.bool.isRequired,
        hoverActive: React.PropTypes.bool.isRequired,
        collapsibles: React.PropTypes.array.isRequired,
        tld: React.PropTypes.string.isRequired
    }

	render() {
        const collapsibles = this.props.collapsibles.map((word, i) =>
            (<span key={i} className='collapsible-word'>
                {word[0]}<span className='collapsible-body'>{word.slice(1)}</span>
            </span>)
        )

		return <div className={classNames({
            'title': true,
            'hover-active': this.props.hoverActive,
            collapsed: this.props.collapsed
        })}>
            {collapsibles}
            <span className='dot-wrap'><span className='dot'>.</span></span>
            <span className='tld'>{this.props.tld}</span>
        </div>
	}
}
/* eslint-enable indent,react/jsx-indent */
