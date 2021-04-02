import numbersMap from './numbers-map'

const romanLetters = Object.values(numbersMap)

export const romanNumberRegex = new RegExp(`[${romanLetters}+]`)
export const integerNumberRegex = /^[1-9]\d*$/
