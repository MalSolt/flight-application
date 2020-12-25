import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from './authReducer'
import { sliderReducer } from './sliderReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './flightsReducer/saga'
import { flightsReducer } from './flightsReducer/flightsRegucer'

const saga = createSagaMiddleware()

const rootReducer = combineReducers({ auth: authReducer, slider: sliderReducer, flights: flightsReducer })

const composeSetup =
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export const store = createStore(rootReducer, composeSetup(applyMiddleware(saga)))

saga.run(sagaWatcher)
