import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers'
import {} from 'redux'

export default createStore(
    RootReducer,

)