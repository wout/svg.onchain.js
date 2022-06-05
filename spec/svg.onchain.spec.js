import {SVG} from '../svg.onchain.js'
import {createSVGWindow} from 'svgdom' 

const window = createSVGWindow()
global.document = window.document

describe('SVG', () => {
  describe('.doc', () => {
    it('creates a new svg document', () => {
      let cvs = SVG.doc(100, 150, document.documentElement)

      expect(cvs.nodeName).toBe('svg')
      expect(cvs.getAttribute('xmlns')).toEqual(SVG.ns)
      expect(cvs.getAttribute('width')).toBe(100)
      expect(cvs.getAttribute('height')).toBe(150)
    })

    it('accepts optional attributes', () => {
      let cvs = SVG.doc(100, 150, document.documentElement, {
        viewBox: '0 0 200 300'
      })

      expect(cvs.getAttribute('viewBox')).toBe('0 0 200 300')
    })
  })

  describe('.el', () => {
    it('creates and element in the given parent', () => {
      let rect = SVG.el('rect', testDoc(), {width: 100, height: 50, rx: 5})

      expect(rect.nodeName).toBe('rect')
      expect(rect.getAttribute('width')).toBe(100) 
      expect(rect.getAttribute('height')).toBe(50) 
      expect(rect.getAttribute('rx')).toBe(5) 
    })
  })

  describe('.at', () => {
    it('assigns attributes using an object', () => {
      let rect = SVG.el('rect', testDoc(), {width: 100, height: 50})
      
      SVG.at(rect, {rx: 10})

      expect(rect.getAttribute('rx')).toBe(10)
    })

    it('assigns attributes using an array', () => {
      let rect = SVG.el('rect', testDoc(), {width: 100, height: 50})
      
      SVG.at(rect, [['rx', 11]])

      expect(rect.getAttribute('rx')).toBe(11)
    })

    it('assigns nothing if null is passed', () => {
      let rect = SVG.el('rect', testDoc(), {width: 100, height: 50})
      let originalAttributes = rect.attributes.map(a => String([a.nodeName, a.nodeValue]))

      SVG.at(rect, null)

      let newAttributes = rect.attributes.map(a => String([a.nodeName, a.nodeValue]))

      expect(newAttributes).toEqual(originalAttributes)
    })
  })
})

function testDoc(w = 100, h = 100) {
  return SVG.doc(w, h, document.documentElement)
}
