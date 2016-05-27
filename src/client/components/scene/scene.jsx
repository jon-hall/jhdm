import React,  { cloneElement } from 'react'
import SceneControl from '../scene-control/scene-control.jsx'
import SceneControl from './scene-control.jsx'
import Viewport from './viewport.jsx'

export default class Scene extends React.Component {
    constructor() {
        super()
        this.state = {
            focused: 0
        }
    }

    getChildren() {
        return React.Children.map(this.props.children, (child) => {
            if (child === null) {
                return null
            }

            if (child.type === SceneControl) {
                // Give the scene control a way to increment focus index
                return cloneElement(child, {
                    onStep: (direction) => {
                        this.setState({
                            focused: this.state.focused + direction
                        })
                    }
                })
            }

            if(child.type === Viewport) {
                // Tell the viewport about the focus index, and give it a way to reset should we overflow/underflow the
                // # of surfaces in the viewport
                return cloneElement(child, {
                    focused: this.state.focused,
                    resetFocus: (focused) => {
                        this.setState({
                            focused
                        })
                    }
                })
            }

            return child
        })
    }

    render() {
        return <div className="scene">{this.getChildren()}</div>
    }
}
