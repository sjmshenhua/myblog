import { combineReducers } from 'redux';
import { user } from './user.redux'



//合并所有reducer 并且返回

export default combineReducers({user})