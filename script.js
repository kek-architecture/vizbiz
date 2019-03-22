const menu = document.getElementById('menu')
const submenu = document.getElementById('submenu')
let pos = 0

const FIXED = 'fixed-menu'
const VISIBLE = 'visible'
const LIFTED = 'lifted'


window.addEventListener('scroll', () => {
  const menubox = menu.getBoundingClientRect()
  if (menubox.top < 0) {
    pos = window.pageYOffset
    setTimeout(() => {
      document.body.classList.add(FIXED)
    }, 500)
  }

  if (window.pageYOffset < pos - 20 && pos > 0) {
    document.body.classList.remove(FIXED)
    submenu.classList.remove(VISIBLE)
  }
})

submenu.addEventListener('transitionend', (e) => {
  if (e.propertyName === 'margin-top' && document.body.classList.contains(FIXED)) {
    submenu.classList.add(VISIBLE)
  }
})

const menulinks = menu.querySelectorAll('li a')

menulinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(`${href}[data-section]`)

    window.scrollTo({
      left: 0,
      top: section.offsetTop,
      behavior: 'smooth'
    }, )
  })
})

const people = document.querySelectorAll('.menu .person')

people.forEach(p => {
  p.addEventListener('click', (e) => {
    const text = e.currentTarget.querySelector('.description')
    if (text.classList.contains(LIFTED)) {
      text.classList.remove(LIFTED)
    } else {
      text.classList.add(LIFTED)
    }
  })
})
