import { intRomanMap } from './numbers-map'
import errors from './errors'
import { isValidRoman, isValidInt } from './validators'

const romanToInt = romanNumber => {
  if (!isValidRoman(romanNumber)) {
    throw new Error(errors.wrongInput.expectedRoman)
  }

  const romanIntegerMap = Object.entries(intRomanMap).reduce(
    (acc, [int, roman]) => ({ ...acc, [roman]: int }),
    {}
  )
  const romanNumberLetters = romanNumber.split('')
  const romanNumberDigits = []

  do {
    const symbol = romanNumberLetters.shift()

    if (
      romanNumberLetters[0] &&
      romanIntegerMap[symbol.concat(romanNumberLetters[0])]
    ) {
      romanNumberDigits.push(symbol.concat(romanNumberLetters[0]))
      romanNumberLetters.shift()
    } else {
      romanNumberDigits.push(symbol)
    }
  } while (romanNumberLetters.length > 0)

  const integerOutput = romanNumberDigits.reduce(
    (acc, romanDigit) => acc + parseInt(romanIntegerMap[romanDigit], 10),
    0
  )

  if (!isValidInt(integerOutput)) {
    throw new Error(errors.failedConverting.toInteger)
  }

  return integerOutput
}

export default romanToInt
