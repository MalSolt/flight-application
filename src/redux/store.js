import { applyMiddleware, combineReducers, createStore } from 'redux'
import auth from './authReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ auth })

export const store = createStore(rootReducer, applyMiddleware(thunk))
