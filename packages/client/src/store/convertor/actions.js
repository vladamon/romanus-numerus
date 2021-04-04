import * as types from './types'

export const convertRomanToInteger = (data) => ({
  type: types.convertRomanToInteger,
  payload: data
})

export const convertRomanToIntegerSuccess = (data) => ({
  type: types.convertRomanToIntegerSuccess,
  payload: data
})

export const convertRomanToIntegerError = (error) => ({
  type: types.convertRomanToIntegerError,
  payload: error
})

export const convertIntegerToRoman = (data) => ({
  type: types.convertIntegerToRoman,
  payload: data
})

export const convertIntegerToRomanSuccess = (data) => ({
  type: types.convertIntegerToRomanSuccess,
  payload: data
})

export const convertIntegerToRomanError = (data) => ({
  type: types.convertIntegerToRomanError,
  payload: data
})
