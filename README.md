# micro.svg.js
A micro JS library (0.4KB) for manipulating and animating SVG.

This library is intended for use on a blockchain. Everything is stripped down to
the bare essentials. That's why it's not wrapped in a module.

## Usage

Create a canvas of 100 x 100 px:

```js
let cvs = svg(100, 100, document.body)
```

Add a pink square, filling the canvas:

```js
let rect = el('rect', cvs, {
  width: 100,
  height: 100,
  fill: 'pink'
})
```

Animate the corner radius of the square:

```js
el('animate', rect, {
  attributeName: 'rx',
  values: '0;50;0',
  dur: '5s',
  repeatCount: 'indefinite'
})
````

## License
SVG.js is licensed under the terms of the MIT License.
