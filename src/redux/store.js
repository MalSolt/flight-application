import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from './authReducer'
import { sliderReducer } from './sliderReducer'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './flightsReducer/saga'
import { flightsReducer } from './flightsReducer/flightsRegucer'

const saga = createSagaMiddleware()

const rootReducer = combineReducers({ auth: authReducer, slider: sliderReducer, flights: flightsReducer })

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(saga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

saga.run(sagaWatcher)
