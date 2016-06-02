import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import App from './components/app/app.jsx'
import Logo from './components/logo/logo.jsx'
import Projects from './components/projects/projects.jsx'
// import Pager from './pager.jsx'
/* eslint-disable no-unused-vars */
import __style from './index.styl'
/* eslint-enable no-unused-vars */

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Logo}/>
            <Route path='projects' component={Projects} />
        </Route>
    </Router>, document.querySelector('#app'))
