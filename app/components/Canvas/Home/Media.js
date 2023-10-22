import { Mesh, Program } from 'ogl'
import vertex from 'shaders/home-vertex.glsl'
import fragment from 'shaders/home-fragment.glsl'
import GSAP from 'gsap'
export default class {
  constructor ({ element, index, gl, geometry, scene, sizes }) {
    this.element = element
    this.index = index
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.sizes = sizes
    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.extra = {
      x: 0,
      y: 0
    }
  }

  createTexture () {
    const image = this.element
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram () {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uSpeed: { value: 0 },
        uViewportSizes: { value: [this.sizes.width, this.sizes.height] },
        uAlpha: { value: 0 },
        tMap: { value: this.texture }
      }
    })
  }

  createMesh () {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program
    })
    this.mesh.setParent(this.scene)
    this.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
  }

  createBounds ({ sizes }) {
    this.sizes = sizes
    this.bounds = this.element.getBoundingClientRect()
    this.updateScale()
    this.updateX()
    this.updateY()
  }

  show () {
    GSAP.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      delay: this.index * 0.1,
      duration: 1,
      value: 0.4
    })
  }

  hide () {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0
    })
  }

  onResize (sizes, scroll) {
    this.extra = {
      x: 0,
      y: 0
    }
    this.createBounds(sizes)
    this.updateX(scroll.x)
    this.updateY(scroll.y)
  }

  updateScale () {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
  }

  updateX (x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth
    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra.x
  }

  updateY (y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height) + this.extra.y
  }

  update (scroll, speed) {
    if (!this.bounds) return
    this.updateX(scroll.x)
    this.updateY(scroll.y)
    this.program.uniforms.uSpeed.value = speed
  }
}
