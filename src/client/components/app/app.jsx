import React from 'react'
import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from '../app.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class App extends React.Component {
    render() {
        return (<div className={classNames({
            app: true,
            active: true,
            'focus-title': true
        })}></div>)
    }
}
/* eslint-enable react/jsx-indent */
