import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from './types'
import { convertRomanToInteger, convertIntegerToRoman } from './../../api/convertor'

function * convertRomanToIntegerSaga ({ payload }) {
  try {
    const result = yield call(convertRomanToInteger, payload)

    yield put({
      type: types.convertRomanToIntegerSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.convertRomanToIntegerError,
      payload: ex.message
    })
  }
}

function * convertIntegerToRomanSaga ({ payload }) {
  try {
    const result = yield call(convertIntegerToRoman, payload)

    yield put({
      type: types.convertIntegerToRomanSuccess,
      payload: result
    })
  } catch (ex) {
    yield put({
      type: types.convertIntegerToRomanError,
      payload: ex.message
    })
  }
}

export const sagas = [
  takeLatest(types.convertIntegerToRoman, convertIntegerToRomanSaga),
  takeLatest(types.convertRomanToInteger, convertRomanToIntegerSaga)
]
