import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers.js'

let middleware = []

if (__DEBUG__) {
    const createLogger = require('redux-logger')
    middleware = [...middleware, createLogger({
        collapsed: true,
    })]
}

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
    const store = finalCreateStore(reducers, initialState)

    if (__DEV__ && module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers.js', () => {
            const nextRootReducer = require('./reducers.js')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
