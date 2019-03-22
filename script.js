const menu = document.getElementById('menu')
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

const people = document.querySelectorAll('.person')

people.forEach(p => {
  p.addEventListener('click', (e) => {
    console.debug(e.currentTarget, e.target)
    const text = e.currentTarget.querySelector('.description')
    if (text.classList.contains('lifted')) {
      text.classList.remove('lifted')
    } else {
      text.classList.add('lifted')
    }
  })
})

if (window.innerWidth <= 768) {
  const mobileButton = document.getElementById('hamburger')

  mobileButton.addEventListener('click', () => {
    if (document.body.classList.contains('mobile-active')) {
      document.body.classList.remove('mobile-active')
    } else {
      document.body.classList.add('mobile-active')
    }
  })
}
