import numbersMap from './numbers-map'

const romanLetters = Object.values(numbersMap)

export const romanNumberRegex = new RegExp(`[${romanLetters}+]`)
export const integerNumberRegex = /^[1-9]\d*$/

export const isValidInt = (intNumber) => {
	return integerNumberRegex.test(intNumber);
};

export const isValidRoman = (romanNumber) => {
	return romanNumberRegex.test(romanNumber);
};

export const isValidInput = (arg) => {
	return !isValidInt(arg) && !isValidRoman(arg);
};

