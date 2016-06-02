import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from './app.styl'
/* eslint-enable no-unused-vars */
import Title from '../title/title.jsx'

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        location: React.PropTypes.object
    }

    render() {
        return <div className='app'>
            <div className='title-bar'>
                <Title />
                <span className='menu'>
                    <span className='menu-item'><Link to='/'>Home</Link></span>
                    <span className='menu-item'><Link to='/projects'>Projects</Link></span>
                </span>
            </div>

            <ReactCSSTransitionGroup
                component='div'
                transitionName='slide'
                className='content'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >{
                    React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })
                }
            </ReactCSSTransitionGroup>
        </div>
    }
}
/* eslint-enable react/jsx-indent */
