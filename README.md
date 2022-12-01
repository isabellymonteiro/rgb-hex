# rgb-hex

Convert rgb color to hex and hex to rgb

## Install

```
$ npm install @isabellymonteiro/rgb-hex
```

## Usage

### rgb to hex

```js
import { rgbToHex } from '@isabellymonteiro/rgb-hex'

rgbToHex(0, 76, 153)
// '#004c99'
```

### hex to rgb
> It does not work for a shorthand hex triplet such as '#03F'.

```js
import { hexToRgb } from '@isabellymonteiro/rgb-hex'

hexToRgb('004c99') // or hexToRgb('#004c99')
// { r: 0, g: 76, b: 153 }
```
