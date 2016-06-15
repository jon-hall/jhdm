import React from 'react'
// import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from './link-bar.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class LinkBar extends React.Component {
    constructor() {
        super()
        this.state = {
            links: [{
                url: 'https://github.com/jon-hall',
                title: 'github/jon-hall',
                class: 'github-link'
            }, {
                url: 'mailto:jon_hall@outlook.com',
                title: 'email',
                class: 'email-link'
            }]
        }
    }

    render() {
        const links = this.state.links.map((link) =>
            <a href={link.url} title={link.title} className={'link ' + link.class}></a>
        )

        return <div className='link-bar'>{links}</div>
    }
}
/* eslint-enable react/jsx-indent */
