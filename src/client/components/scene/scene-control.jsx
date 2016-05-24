import React from 'react'

class SceneControl extends React.Component {
    step(direction) {
        if(typeof this.props.onStep === 'function') {
            this.props.onStep(direction)
        }
    }

    // TODO: Selectbox-type menu from props (from viewport via scene)
    render() {
        return <div className="scene-control">
            <button onClick={this.step.bind(this, -1)}>&lt;-</button>
            <button onClick={this.step.bind(this, 1)}>-&gt;</button>
        </div>
    }
}
