import { Plane, Transform } from 'ogl'

import map from 'lodash/map'

import Gallery from './Gallery'

export default class {
  constructor ({ gl, scene, sizes }) {
    this.gl = gl
    this.sizes = sizes

    this.group = new Transform()

    this.createGeometry()
    this.createGalleries()

    this.group.setParent(scene)
    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGalleries () {
    this.galleriesElements = document.querySelectorAll('.about__gallery')

    this.galleries = map(this.galleriesElements, (element, index) => {
      return new Gallery({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  show () {
    map(this.galleries, (gallery) => gallery.show())
  }

  hide () {
    map(this.galleries, (gallery) => gallery.hide())
  }

  onResize (e) {
    map(this.galleries, (gallery) => gallery.onResize(e))
  }

  onTouchDown (e) {
    map(this.galleries, (gallery) => gallery.onTouchDown(e))
  }

  onTouchMove (e) {
    map(this.galleries, (gallery) => gallery.onTouchMove(e))
  }

  onTouchUp (e) {
    map(this.galleries, (gallery) => gallery.onTouchUp(e))
  }

  onWheel ({ pixelX, pixelY }) {}

  update (scroll) {
    const y = scroll.current / window.innerHeight
    map(this.galleries, (gallery) => gallery.update(y))
  }

  destroy () {
    map(this.galleries, (gallery) => gallery.destroy())
  }
}
