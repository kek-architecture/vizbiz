const sections = document.querySelectorAll('[data-section]')
const menuButtons = document.querySelectorAll('.menu-link')

function showPanel (id) {
  sections.forEach(section => {
    if (section.getAttribute('id') !== id) {
      section.style.display = 'none'
    } else {
      section.style.display = 'block'
    }
  })
}

showPanel('about')

menuButtons.forEach((button) => {
  button.addEventListener('click', (e) => {

    const href = e.target.getAttribute('href').slice(1)

    showPanel(href)
    e.preventDefault()
  })
})

const menu = document.getElementById('menu')
let pos = 0

window.addEventListener('scroll', () => {
  const menubox = menu.getBoundingClientRect()
  if (menubox.top < 0) {
    pos = window.pageYOffset
    menu.classList.add('fixed')
  }
  if (window.pageYOffset < pos && menu.classList.contains('fixed')) {
    menu.classList.remove('fixed')
  }
})

const people = document.querySelectorAll('.person')

people.forEach(p => {
  p.addEventListener('click', (e) => {
    const text = e.currentTarget.querySelector('.description')
    if (text.classList.contains('lifted')) {
      text.classList.remove('lifted')
    } else {
      text.classList.add('lifted')
    }
  })
})
