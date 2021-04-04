import reducer from '../reducers'

const initialState = {
  inputValue: '',
  converting: false,
  error: false,
  errorMessage: '',
  convertedValue: ''
}

describe('convertor reducer', () => {
  it('should return initial state if unknown action', () => {
    expect(
      reducer(undefined, {
        type: 'THIS_ACTION_IS_FAKE'
      })
    ).toEqual(initialState)
  })

  describe('converting to roman', () => {
    it('should handle action', () => {
      expect(
        reducer(initialState, {
          type: 'CONVERT_INTEGER_TO_ROMAN',
          payload: 2100
        })
      ).toEqual({
        inputValue: 2100,
        converting: true,
        error: false,
        errorMessage: '',
        convertedValue: ''
      })
    })

    it('should handle success', () => {
      reducer(initialState, {
        type: 'CONVERT_INTEGER_TO_ROMAN',
        payload: 2100
      })
      expect(
        reducer(undefined, {
          type: 'CONVERT_INTEGER_TO_ROMAN_SUCCESS',
          payload: 'MMC'
        })
      ).toEqual({
        inputValue: '',
        converting: false,
        error: false,
        errorMessage: '',
        convertedValue: 'MMC'
      })
    })

    it('should handle error', () => {
      reducer(initialState, {
        type: 'CONVERT_INTEGER_TO_ROMAN',
        payload: 2100
      })
      expect(
        reducer(undefined, {
          type: 'CONVERT_INTEGER_TO_ROMAN_ERROR',
          payload: 'The input was not correct'
        })
      ).toEqual({
        inputValue: '',
        converting: false,
        error: true,
        errorMessage: 'The input was not correct',
        convertedValue: ''
      })
    })
  })

  describe('converting from roman', () => {
    it('should handle action', () => {
      expect(
        reducer(initialState, {
          type: 'CONVERT_ROMAN_TO_INTEGER',
          payload: 'MMC'
        })
      ).toEqual({
        inputValue: 'MMC',
        converting: true,
        error: false,
        errorMessage: '',
        convertedValue: ''
      })
    })

    it('should handle success', () => {
      reducer(initialState, {
        type: 'CONVERT_ROMAN_TO_INTEGER',
        payload: 'MMC'
      })
      expect(
        reducer(initialState, {
          type: 'CONVERT_ROMAN_TO_INTEGER_SUCCESS',
          payload: 2100
        })
      ).toEqual({
        inputValue: '',
        converting: false,
        error: false,
        errorMessage: '',
        convertedValue: 2100
      })
    })

    it('should handle error', () => {
      reducer(initialState, {
        type: 'CONVERT_ROMAN_TO_INTEGER',
        payload: 'MMC'
      })
      expect(
        reducer(initialState, {
          type: 'CONVERT_ROMAN_TO_INTEGER_ERROR',
          payload: 'The input was not correct'
        })
      ).toEqual({
        inputValue: '',
        converting: false,
        error: true,
        errorMessage: 'The input was not correct',
        convertedValue: ''
      })
    })
  })
})
