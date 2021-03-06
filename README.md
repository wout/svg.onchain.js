# svg.onchain.js
A micro JS library (362 bytes) for manipulating and animating SVG.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

![GitHub](https://img.shields.io/github/license/onchainjs/svg.onchain.js)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/onchainjs/svg.onchain.js)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/onchainjs/svg.onchain.js/svg.onchain.js%20CI)

## Why not use vanilla JS?
Building an SVG document with plain JS is pretty verbose. Let's look at the 
following example:

```js
const ns = 'http://www.w3.org/2000/svg'
const svg = document.createElementNS(ns, 'svg')
svg.setAttribute('xmlns', ns)
svg.setAttribute('width', 100)
svg.setAttribute('height', 100)
document.body.appendChild(svg)
const rect = document.createElementNS(ns, 'rect')
rect.setAttribute('width', 100)
rect.setAttribute('height', 100)
rect.setAttribute('fill', '#f06')
rect.setAttribute('rx', 10)
rect.setAttribute('ry', 20)
svg.appendChild(rect)
```

That's the code to create an SVG canvas and draw a pink square on it. In
comparison, doing the same using this library is a lot more consice:

```js
const doc = SVG.doc(100, 100, document.body)
SVG.el('rect', doc, {width: 100, height: 100, fill: '#f06', rx: 10, ry: 20})
```

That's 98 bytes instead of 406, or roughly 75% less code. And the difference is
only going to get bigger the more objects you add. Of course, this library takes
up 362 bytes as well, but that's quickly compensated after adding a few more
objects.

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
