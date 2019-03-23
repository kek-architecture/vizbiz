const menu = document.getElementById('menu')
const menulinks = menu.querySelectorAll('#menu a')

const LIFTED = 'lifted'
const MOBILEACTIVE = 'mobile-active'

menulinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    const section = document.querySelector(`${href}[data-section]`)

    window.scrollTo({
      left: 0,
      top: section.offsetTop,
      behavior: 'smooth'
    },)

    if (window.innerWidth <= 768 && document.body.classList.contains(MOBILEACTIVE)) {
      document.body.classList.remove(MOBILEACTIVE)
    }
  })
})

const people = document.querySelectorAll('.person')

people.forEach(p => {
  p.addEventListener('click', (e) => {
    console.debug(e.currentTarget, e.target)
    const text = e.currentTarget.querySelector('.description')
    if (text.classList.contains(LIFTED)) {
      text.classList.remove(LIFTED)
    } else {
      text.classList.add(LIFTED)
    }
  })
})

if (window.innerWidth <= 768) {
  const mobileButton = document.getElementById('hamburger')

  mobileButton.addEventListener('click', () => {
    if (document.body.classList.contains(MOBILEACTIVE)) {
      document.body.classList.remove(MOBILEACTIVE)
    } else {
      document.body.classList.add(MOBILEACTIVE)
    }
  })
}
