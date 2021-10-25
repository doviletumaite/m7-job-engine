import { createStore } from 'redux'
import mainReducer from './reducers'
import initialState from "./reducers"

export default createStore(mainReducer, initialState)