import romanToInt from './roman-to-int'
import intToRoman from './int-to-roman';
import { isValidInt, isValidRoman } from './validators';

const numberTypes = {
	INT: 'integer',
	ROMAN: 'roman',
	UNDETECTED: 'undetected',
};

export const toRoman = (arg) => {
	// TODO: perform any additional validation here
	return intToRoman(arg);
};

export const fromRoman = (arg) => {
	// TODO: perform any additional validation here
	return romanToInt(arg);
};

export const detect = (arg) => {
	return isValidInt(arg) ? numberTypes.INT : isValidRoman(arg) ? numberTypes.ROMAN : numberTypes.UNDETECTED;
};

export const maxDigits = {
	intValue: 3999,
	romanLength: 9,
};
