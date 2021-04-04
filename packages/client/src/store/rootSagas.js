import { all } from '@redux-saga/core/effects'
import { sagas as convertorSagas } from './convertor/sagas'

export function * rootSagas () {
  yield all([...convertorSagas])
}
