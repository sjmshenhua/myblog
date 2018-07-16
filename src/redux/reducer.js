import { combineReducers } from 'redux';
import { user } from './user.redux'
import { chatuser } from '../redux/chatUser.redux'


//合并所有reducer 并且返回

export default combineReducers({user, chatuser})