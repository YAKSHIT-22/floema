import { Mesh, Program } from 'ogl'
import vertex from 'shaders/collections-vertex.glsl'
import fragment from 'shaders/collections-fragment.glsl'
import GSAP from 'gsap'
export default class {
  constructor ({ element, index, gl, geometry, scene, sizes }) {
    this.element = element
    this.index = index
    this.gl = gl
    this.geometry = geometry
    this.scene = scene
    this.sizes = sizes
    this.extra = {
      x: 0,
      y: 0
    }
    this.createTexture()
    this.createProgram()
    this.createMesh()
    this.createBounds({ sizes: this.sizes })
    this.opacity = {
      current: 0,
      target: 0,
      lerp: 0.1,
      multiplier: 0
    }
  }

  createTexture () {
    const image = this.element.querySelector('.collections__gallery__media__image')
    this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram () {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
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
  }

  createBounds ({ sizes }) {
    this.sizes = sizes
    this.bounds = this.element.getBoundingClientRect()
    this.updateScale()
    this.updateX()
    this.updateY()
  }

  show () {
    GSAP.fromTo(this.opacity, {
      multiplier: 0
    }, {
      delay: this.index * 0.1,
      duration: 1,
      multiplier: 1
    })
  }

  hide () {
    GSAP.to(this.opacity, {
      multiplier: 0
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

  update (scroll, index) {
    this.updateX(scroll)
    this.updateY(0)
    const amplitude = 0.1
    const frequency = 1
    this.mesh.rotation.z = -0.02 * Math.PI * Math.sin(this.index / frequency)
    this.mesh.position.z = amplitude * Math.sin(this.index / frequency)
    this.opacity.target = this.index === index ? 1 : 0.4
    this.opacity.current = GSAP.utils.interpolate(this.opacity.current, this.opacity.target, this.opacity.lerp)
    this.program.uniforms.uAlpha.value = this.opacity.multiplier
    this.program.uniforms.uAlpha.value = this.opacity.multiplier * this.opacity.current
  }
}
