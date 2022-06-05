export const SVG = {
  /**
    * The SVG namespace.
    */
  ns: 'http://www.w3.org/2000/svg',

  /**
    * Creates a root SVG document.
    * @param {number} w - Element width.
    * @param {number} h - Element height.
    * @param {HTMLElement} e - The parent (HTML) element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute key/value pairs.
    * @return {SVGElement} A new SVG document.
    */
  doc(w, h, e, o) {
    (e = SVG.el('svg', e)).setAttribute('xmlns', SVG.ns)
    return SVG.at(SVG.at(e, {height: h, version: '1.1', width: w}), o)
  },

  /**
    * Creates an element.
    * @param {string} n - The element's node name.
    * @param {SVGElement} p - The parent (SVG) element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute key/value pairs.
    * @return {SVGElement} A new SVG element.
    */
  el(n, p, o) {
    return SVG.at(p.appendChild(document.createElementNS(SVG.ns, n)), o)
  },

  /**
    * Assigns attributes to given element.
    * @param {Element} e - The target element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute key/value pairs.
    * @param {null} i - Iterator index (for internal use only).
    * @return {SVGElement} The target element.
    */
  at(e, o, i) {
    if (!((o = o || []) instanceof Array)) o = Object.entries(o)
    for (i = o.length - 1; i >= 0; i--) e.setAttribute(o[i][0], o[i][1])
    return e
  }
}
