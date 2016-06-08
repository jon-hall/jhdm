import React from 'react'
// import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from './logo.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class App extends React.Component {
    constructor() {
        super()

        const animations = []
        this.state = {
            animation: animations[Math.floor(animations.length * Math.random())]
        }
    }

    render() {
        const letters = 'jonhall.me'.split('').map((char) =>
            <span className='char'>{char}</span>)

        return <div className='logo-wrap'>
            <div className={'logo ' + this.state.animation}>{letters}</div>
        </div>
    }
}
/* eslint-enable react/jsx-indent */
