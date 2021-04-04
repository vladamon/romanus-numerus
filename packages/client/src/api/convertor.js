import { toRoman, fromRoman } from '@romanus-numerus/romanus-aux/lib'

export const convertRomanToInteger = async arg => {
  try {
    const result = await fromRoman(arg)

    return result
  } catch (ex) {
    throw ex
  }
}

export const convertIntegerToRoman = async arg => {
  try {
    const result = await toRoman(arg)

    return result
  } catch (ex) {
    throw ex
  }
}
