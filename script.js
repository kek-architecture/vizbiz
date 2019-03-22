const menu = document.getElementById('menu')

const LIFTED = 'lifted'


const menulinks = menu.querySelectorAll('#menu a')

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
