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

        const animations = ['twister', 'hover-ring', 'half-wave']
        this.state = {
            animation: animations[Math.floor(animations.length * Math.random())]
        }
    }

    render() {
        const letters = 'jonhall.me'.split('').map((char) =>
            <span className='logo-letter'>{char}</span>)

        return <div className={'logo-wrap ' + this.state.animation}>
            <div className='logo'>{letters}</div>
        </div>
    }
}
/* eslint-enable react/jsx-indent */
