import { intRomanMap } from './numbers-map'
import errors from './errors'
import { isValidRoman, isValidInt } from './util';

const intToRoman = (intNumber) => {
  if (!isValidInt(intNumber)) {
		throw new Error(errors.wrongInput.expectedInteger);
  }

  const integersDescending = Object.keys(intRomanMap).sort((a, b) => b - a)

  let romanOutput = ''
  let tempInt = intNumber

  do {
    let intToAdd = integersDescending.find(intNumber => tempInt >= intNumber)

    if (intToAdd) {
      romanOutput = romanOutput.concat(intRomanMap[intToAdd])
      tempInt -= intToAdd
    }
  } while (tempInt > 0)

  if (!isValidRoman(romanOutput)) {
		throw new Error(errors.failedConverting.toRoman);
  }

  return romanOutput
}

export default intToRoman
