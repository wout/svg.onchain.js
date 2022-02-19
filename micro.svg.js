// Creates an SVG document
// I: - w (number): width of the document
//    - h (number): height of the document
//    - pa (element): the target parent element
//    - ob (object): an *optional* object with attribute key/value pairs
// O: - (element): new svg document
function svg(w, h, pa, ob) {
  let e = el('svg', pa)
  e.setAttribute('xmlns', ns())
  return at(e, Object.assign({ height: h, version: '1.1', width: w }, ob || {}))
}

// Creates an element
// I: - nn (string): the element's node name
//    - pa (element): the target parent element
//    - ob (object): an *optional* object with attribute key/value pairs
// O: - (element): new element
function el(nn, pa, ob) {
  let e = pa.appendChild(document.createElementNS(ns(), nn))
  return ob ? at(e, ob) : e
}

// Assigns attributes to given object
// I: - el (element): the target element
//    - ob (object): an object or array with attribute key/value pairs
//    - ns (string): an optional custom namespace
// O: - (element): the target element
function at(el, ob, ns) {
  if (!(ob instanceof Array)) ob = Object.entries(ob)
  if (ob.length == 0) return el
  let [k, v] = ob.shift()
  el.setAttributeNS(ns, k, v)
  return ob.length == 0 ? el : at(el, ob, ns)
}

// Returns the SVG namespace
// O: - (string): svg namespace url
function ns() {
  return 'http://www.w3.org/2000/svg'
}

