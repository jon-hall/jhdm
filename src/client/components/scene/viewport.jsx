import React,  { cloneElement } from 'react'
import Surface from './surface.jsx'
import { transformFromProps } from '../../scripts/utils.js'

class Viewport extends React.Component {
    constructor() {
        super()
        this.surfaces = 0
        this.state = {
            focused: 0,
            focusedSurface: null
        }
    }

    getChildren() {
        let i = -1

        return React.Children.map(this.props.children, (child) => {
            if (child === null) {
                return null
            }
            if (child.type === Surface) {
                i++
                this.surfaces = i + 1

                return cloneElement(child, {
                    ref: 'surface-' + i,
                    active: i === this.state.activeSurface
                })
            }

            return child
        })
    }

    getTransform() {
        return transformFromProps(this.state.focusedSurface.props, true)
    }

    componentWillReceiveProps(nextProps) {
        let focusedSurfaceIndex = nextProps.focused

        if(nextProps.focused < 0) {
            return this.props.resetFocus(this.surfaces - 1)
        }

        if (nextProps.focused >= this.surfaces) {
            return this.props.resetFocus(0)
        }

        const focused = nextProps.focused,
            focusedSurface = this.refs['surface-' + nextProps.focused]

        this.setState({ focused, focusedSurface })
    }

    render() {
        const children = this.getChildren(),
            viewportStyle = {
                transform: this.getTransform()
            }

        return <div className="viewport-root">
            <div style={viewportStyle} className="viewport">{children}</div>
        </div>
    }
}
