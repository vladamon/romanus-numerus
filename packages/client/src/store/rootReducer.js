import { combineReducers } from 'redux'

import convertorReducer from './convertor/reducers'

export default combineReducers({
  convertor: convertorReducer
})
