export const intRomanMap = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

export const subtractFormatMap = {
  'I': {
    'IV': 4,
    'IX': 9
  },
  'X': {
    'XL': 40,
    'XC': 90
  },
  'C': {
    'CD': 400,
    'CM': 900
  }
}

