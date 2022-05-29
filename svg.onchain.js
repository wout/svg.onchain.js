SVG = {
  /**
    * The SVG namespace.
    */
  ns: 'http://www.w3.org/2000/svg',

  /**
    * Creates a root SVG document.
    * @param {number|string} w - Element width.
    * @param {number|string} h - Element height.
    * @param {HTMLElement} p - The parent (HTML) element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute values.
    * @return A new SVG document.
    */
  doc: (w, h, p, o) => {
    const [e, a] = [SVG.el('svg', p), {height: h, version: '1.1', width: w}]
    e.setAttribute('xmlns', SVG.ns)
    return SVG.at(e, Object.assign(a, o || []))
  },

  /**
    * Creates an element.
    * @param {string} n - The element's node name.
    * @param {SVGElement} p - The parent (SVG) element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute values.
    * @return A new SVG element.
    */
  el: (n, p, o) => SVG.at(p.appendChild(document.createElementNS(SVG.ns, n)), o),

  /**
    * Assigns attributes to given element.
    * @param {Element} e - The target element.
    * @param {object|[string, boolean|number|string][]|null} o - Attribute values.
    * @param {string|null} n - Optional custom namespace.
    * @return The target element.
    */
  at: (e, o, n) => {
    if (!((o = o || []) instanceof Array)) o = Object.entries(o)
    for (let i = o.length - 1; i >= 0; i--) e.setAttributeNS(n, o[i][0], o[i][1])
    return e
  }
}
