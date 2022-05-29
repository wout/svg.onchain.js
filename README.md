# svg.onchain.js
A micro JS library (~0.4KB) for manipulating and animating SVG.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials. 

## Usage
Create a canvas of 100x100 px:

```js
let cvs = SVG.doc(100, 100, document.body)
```

Add a square, filling the canvas:

```js
let rect = SVG.el('rect', cvs, {width: 100, height: 100})
```

Update the colour of the square:

```js
SVG.at(rect, {fill: '#0fa'})
```

Animate the corner radius of the square:

```js
SVG.el('animate', rect, {
  attributeName: 'rx',
  values: '0;50;0',
  dur: '5s',
  repeatCount: 'indefinite'
})
```

## License
svg.onchain.js is licensed under the terms of the MIT License.
