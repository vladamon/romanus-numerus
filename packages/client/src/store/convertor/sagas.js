import { call, put, takeLatest } from 'redux-saga/effects';

import * as types from './types';
import { convertRomanToInteger, convertIntegerToRoman } from './../../api/convertor';

function* convertRomanToIntegerSaga(arg) {
	try {
		const result = yield call(convertRomanToInteger, arg);

		yield put({
			type: types.convertRomanToIntegerSuccess,
			payload: result,
		});
	} catch (ex) {
		yield put({
			type: types.convertRomanToIntegerError,
			payload: ex,
		});
	}
}

function* convertIntegerToRomanSaga(arg) {
	try {
		const result = yield call(convertIntegerToRoman, arg);

		yield put({
			type: types.convertIntegerToRomanSuccess,
			payload: result,
		});
	} catch (ex) {
		yield put({
			type: types.convertIntegerToRomanError,
			payload: ex,
		});
	}
}

export const sagas = [
	takeLatest(types.convertIntegerToRoman, convertIntegerToRomanSaga),
	takeLatest(types.convertRomanToInteger, convertRomanToIntegerSaga),
];
