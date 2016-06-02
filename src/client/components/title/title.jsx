import React from 'react'
import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from './title.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable indent,react/jsx-indent */
export default class Title extends React.Component {
    constructor() {
        super()

        this.state = {
            collapsibles: ['jon', 'hall'],
            tld: 'me'
        }
    }

	render() {
        const collapsibles = this.state.collapsibles.map((word, i) =>
            (<span key={i} className='collapsible-word'>
                {word[0]}<span className='collapsible-body'>{word.slice(1)}</span>
            </span>)
        )

        // TODO: Remove these former prop-driven classes in styling
		return <div className={classNames({
            'title': true,
            'hover-active': true,
            collapsed: true
        })}>
            {collapsibles}
            <span className='dot-wrap'><span className='dot'>.</span></span>
            <span className='tld'>{this.state.tld}</span>
        </div>
	}
}
/* eslint-enable indent,react/jsx-indent */
