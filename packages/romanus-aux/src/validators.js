// source - https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch06s09.html
export const romanNumberRegex = /^(?=[MDCLXVI])(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

export const integerNumberRegex = /^[1-9]\d*$/;

export const isValidInt = (intNumber) => {
	return integerNumberRegex.test(intNumber);
};

export const isValidRoman = (romanNumber) => {
	return romanNumberRegex.test(romanNumber);
};

export const isValidInput = (arg) => {
	return isValidInt(arg) || isValidRoman(arg);
};
