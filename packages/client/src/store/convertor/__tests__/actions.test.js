import * as actions from '../actions'
import * as types from '../types'

describe('actions', () => {
  describe('roman to integer', () => {
    it('should create convert action', () => {
      const payload = 'MMC'
      const expectedAction = {
        type: types.convertRomanToInteger,
        payload
      }
      expect(actions.convertRomanToInteger(payload)).toEqual(expectedAction)
    })

    it('should create success action', () => {
      const payload = '2100'
      const expectedAction = {
        type: types.convertRomanToIntegerSuccess,
        payload
      }
      expect(actions.convertRomanToIntegerSuccess(payload)).toEqual(expectedAction)
    })

    it('should create error action', () => {
      const payload = 'There was an error'
      const expectedAction = {
        type: types.convertRomanToIntegerError,
        payload
      }
      expect(actions.convertRomanToIntegerError(payload)).toEqual(expectedAction)
    })
  })

  describe('integer to roman', () => {
    it('should create convert action', () => {
      const payload = 10
      const expectedAction = {
        type: types.convertIntegerToRoman,
        payload
      }
      expect(actions.convertIntegerToRoman(payload)).toEqual(expectedAction)
    })

    it('should create success action', () => {
      const payload = 'MMC'
      const expectedAction = {
        type: types.convertIntegerToRomanSuccess,
        payload
      }
      expect(actions.convertIntegerToRomanSuccess(payload)).toEqual(expectedAction)
    })

    it('should create an error action', () => {
      const payload = 'There was an error'
      const expectedAction = {
        type: types.convertIntegerToRomanError,
        payload
      }
      expect(actions.convertIntegerToRomanError(payload)).toEqual(expectedAction)
    })
  })
})
