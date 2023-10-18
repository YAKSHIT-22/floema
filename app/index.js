import About from './pages/About'
import Collections from './pages/Collections'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { each } from 'lodash'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Canvas from './components/Canvas'

class App {
  constructor () {
    this.createContent()

    this.createCanvas()
    this.createPreloader()
    this.createNavigation()
    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.onResize()

    this.update()
  }

  createNavigation () {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', this.onPreLoaded.bind(this))
  }

  createCanvas () {
    this.canvas = new Canvas()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createPages () {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      home: new Home(),
      detail: new Detail()
    }
    this.page = this.pages[this.template]
    this.page.create()

    this.navigation.onChange(this.template)
  }

  onPreLoaded () {
    this.preloader.destroy()
    this.onResize()
    this.page.show()
  }

  async onChange (url) {
    await this.page.hide()
    const request = await window.fetch(url)
    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')
      window.history.pushState({}, '', url)
      div.innerHTML = html

      const divContent = div.querySelector('.content')
      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML
      this.page = this.pages[this.template]
      this.page.create()
      this.onResize()
      this.page.show()
      this.addLinkListeners()
    } else {
      console.log('Error')
    }
  }

  onTouchDown (e) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(e)
    }
  }

  onTouchMove (e) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(e)
    }
  }

  onTouchUp (e) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(e)
    }
  }

  onResize () {
    window.requestAnimationFrame((_) => {
      if (this.canvas && this.canvas.onResize) {
        this.canvas.onResize()
      }
    })
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }

  update () {
    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.page.scroll)
    }
    if (this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners () {
    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')
    each(links, link => {
      link.onclick = event => {
        event.preventDefault()
        const { href } = link
        this.onChange(href)
        console.log(event, href)
      }
    })
  }
}

const app = new App()
export default app