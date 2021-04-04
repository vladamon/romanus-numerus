# `@romanus-numerus/romanus-aux`

@romanus-numerus/romanus-aux (What a pretentious name for so simple thing :) is a small library for converting roman numerals to integers and vice-versa.

It exposes very simple API and supports only strict Roman numerals which means no fancy exponential numerals, no conversion of some crazy, long huge numbers and similar.

The largest integer that can be converted is 3999, above that we go outside of boundaries of strict Roman numerals.

The purpose is to support small GUI meant to teach children Roman numerals.

## Usage

```
import { toRoman, fromRoman, detect } from '@romanus-numerus/romanus-aux/lib'
```

### Validate and detect

To detect the type of input, is it Roman, Integer or other type not supported by this library, use:

```javascript
const inputType = detect(arg)
```

Depending on the input, you'll get one of the following strings:

```javascript
integer | roman | undetected
```

### Integer to Roman

To convert integer to Roman numeral use:

```javascript
const converted = toRoman(integerInput)
```

This will throw an exception of either:

```javascript
'Wrong input! Expected integer.'
```
in case of wrong input (not integer) or

```javascript
'Failed converting integer to roman! Please try again.'
```
in case that something goes wrong while converting and the result does not conform to the rules of Roman numerals


### Roman to Integer

To convert Roman numeral to integer use:

```javascript
const converted = fromRoman(romanInput)
```

This will throw an exception of either:

```javascript
'Wrong input! Expected roman number.'
```
in case of wrong input (not integer) or

```javascript
'Failed converting roman to integer! Please try again.'
```
in case that something goes wrong while converting and the result does not conform to the rules of Integers
