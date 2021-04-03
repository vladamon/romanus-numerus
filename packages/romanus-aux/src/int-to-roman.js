import { intRomanMap } from './numbers-map'
import errors from './errors'
import { isValidRoman, isValidInt } from './validators';

const intToRoman = (intNumber) => {
  if (!isValidInt(intNumber)) {
		throw new Error(errors.wrongInput.expectedInteger);
  }

  const integersDescending = Object.keys(intRomanMap)
		.sort((a, b) => b - a)
		.map((item) => parseInt(item, 10));

  let romanOutput = ''
  let tempInt = intNumber

  do {
    let intToAdd = integersDescending.find((intRep) => intRep <= tempInt);

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
