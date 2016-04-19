import React from 'react'
import classNames from 'classnames'
import TitleCard from './title-card.jsx'
import TitleBar from './title-bar.jsx'
import Card from './card.jsx'
/* eslint-disable no-unused-vars */
import __style from '../styles/app.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            focusTitle: true,
            collapsed: false,
            active: false,
            projects: [{
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }, {
                title: 'Lorem Ipsum',
                image: '#',
                description: 'Lorems the ipsum'
            }]
        }
    }

    componentDidMount() {
        let baseDelay = 4000

        // Start the collapsed transition 4s after mounting
        setTimeout(() => this.setState({ collapsed: true }), baseDelay)

        // Start the title transition at same time
        setTimeout(() => this.setState({ focusTitle: false }), baseDelay)

        // Start the in-place state +2s after the others
        setTimeout(() => this.setState({ active: true }), baseDelay + 2000)
    }

    render() {
        const cards = this.state.projects.map((project) => (<Card {...project} />))

        return (<div className={classNames({
            app: true,
            active: this.state.active,
            'focus-title': this.state.focusTitle
        })}>
            <TitleBar>
                <TitleCard
                    focused={this.state.focusTitle}
                    collapsed={this.state.collapsed}
                    hoverActive={this.state.active}
                    collapsibles={['jon', 'hall']}
                    tld='me' />
            </TitleBar>
            <div className='card-rack'>
                {cards}
            </div>
        </div>)
    }
}
/* eslint-enable react/jsx-indent */
