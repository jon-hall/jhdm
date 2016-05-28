import React from 'react'
import { transformFromProps } from '../../scripts/utils.js'

class Surface extends React.Component {
    getTransform() {
        return transformFromProps(this.props)
    }

    render() {
        const surfaceStyle = {
            outline: this.props.active ? '2px solid red' : '0',
            transform: 'translateX(-50%) translateY(-50%) ' + this.getTransform()
        }

        return <div style={surfaceStyle} className="surface">{this.props.children}</div>
    }
}
