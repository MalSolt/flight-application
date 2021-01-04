import { applyMiddleware, combineReducers, createStore } from 'redux'
import auth from './authReducer'
import slider from './sliderReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './flightsReducer/saga'
import flights from './flightsReducer/flightsRegucer'

const saga = createSagaMiddleware()

const rootReducer = combineReducers({ auth, slider, flights })

export const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(sagaWatcher)
