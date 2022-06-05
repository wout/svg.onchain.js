export const SVG = {
  /**
    * The SVG namespace.
    */
  ns: 'http://www.w3.org/2000/svg',
  /**
    * Creates a root SVG document.
    * @param {number} w - Element width.
    * @param {number} h - Element height.
    * @param {HTMLElement} p - The parent (HTML) element.
    * @param {object|[string, boolean|number|string][]|null} o - An array or
    * object with key/value pairs for attributes.
    * @return {SVGElement} A new SVG document.
    */
  doc(w, h, p, o) {
    const [e, a] = [this.el('svg', p), {height: h, version: '1.1', width: w}]
    e.setAttribute('xmlns', this.ns)
    return this.at(e, Object.assign(a, o || []))
  },
  /**
    * Creates an element.
    * @param {string} n - The element's node name.
    * @param {SVGElement} p - The parent (SVG) element.
    * @param {object|[string, boolean|number|string][]|null} o - An array or
    * object with key/value pairs for attributes.
    * @return {SVGElement} A new SVG element.
    */
  el(n, p, o) {
    return this.at(p.appendChild(document.createElementNS(this.ns, n)), o)
  },
  /**
    * Assigns attributes to given element.
    * @param {Element} e - The target element.
    * @param {object|[string, boolean|number|string][]|null} o - An array or
    * object with key/value pairs for attributes.
    * @return {SVGElement} The target element.
    */
  at(e, o) {
    if (!((o = o || []) instanceof Array)) o = Object.entries(o)
    for (let i = o.length - 1; i >= 0; i--) e.setAttribute(o[i][0], o[i][1])
    return e
  }
}
