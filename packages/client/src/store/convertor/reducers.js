import initialState from './initialState'
import * as types from './types'

const convertorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.convertIntegerToRoman:
    case types.convertRomanToInteger:
      return {
        ...state,
        converting: true,
        inputValue: action.payload,
        convertedValue: ''
      }
    case types.convertRomanToIntegerError:
    case types.convertIntegerToRomanError:
      return {
        ...state,
        converting: false,
        error: true,
        errorMessage: action.payload,
        convertedValue: ''
      }
    case types.convertIntegerToRomanSuccess:
    case types.convertRomanToIntegerSuccess:
      return {
        ...state,
        converting: false,
        error: false,
        errorMessage: '',
        convertedValue: action.payload
      }
    default:
      return state
  }
}

export default convertorReducer
