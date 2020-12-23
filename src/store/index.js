//store 必须是唯一的  不能有多个store
import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer) 

export default store;