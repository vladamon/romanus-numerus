import { intRomanMap, subtractFormatMap } from './numbers-map'
import errors from './errors'
import { romanNumberRegex, integerNumberRegex } from './util'

const romanToInt = (romanNumber) => {
  if (!romanNumberRegex.test(romanNumber)) {
    throw new Error(errors.wrongInput.expectedRoman)
  }

  const romanIntegerMap = Object.entries(intRomanMap).reduce((acc, [int, roman]) => ({...acc, [roman]: int}), {})
  const romanNumberLetters = romanNumber.split('')
  const romanNumberDigits = []

  do {
    let symbol = romanNumberLetters.shift()

    if (subtractFormatMap[symbol] &&
      romanNumberLetters[0] &&
      Object.keys(subtractFormatMap[symbol]).includes(symbol.concat(romanNumberLetters[0]))) {
      romanNumberDigits.push(symbol.concat(romanNumberLetters[0]))
      romanNumberLetters.shift()
    } else {
      romanNumberDigits.push(symbol)
    }
  } while (romanNumberLetters.length > 0)

  const integerOutput = romanNumberDigits.reduce((acc, romanDigit) => acc + parseInt(romanIntegerMap[romanDigit], 10), 0)

  if (!integerNumberRegex.test(integerOutput)) {
    throw new Error(errors.failedConverting.toInteger)
  }

  return integerOutput
}

export default romanToInt