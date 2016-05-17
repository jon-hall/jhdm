import React from 'react'
import classNames from 'classnames'
/* eslint-disable no-unused-vars */
import __style from '../app.styl'
/* eslint-enable no-unused-vars */

// FIXME: Why indent broken when using babel parser?
/* eslint-disable react/jsx-indent */
export default class App extends React.Component {
    render() {
        return <Scene>
            <TitleBar>
                <Title />
                <SceneControl></SceneControl>
            </TitleBar>
            <Viewport>
                <Surface>
                    <Logo />
                </Surface>
            </Viewport>
        </Scene>
    }
}
/* eslint-enable react/jsx-indent */
