import romanToInt from './roman-to-int'
import intToRoman from './roman-to-int'
import { isValidInput } from './util';

const toRoman = (arg) => {
  // TODO: perform any additional validation here
  return intToRoman(arg)
}

const fromRoman = (arg) => {
  // TODO: perform any additional validation here
  return romanToInt(arg)
}



export default {
	toRoman,
	fromRoman,
	isValidInput,
};

