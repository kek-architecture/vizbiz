const menu = document.getElementById('menu')
const submenu = document.getElementById('submenu')
let pos = 0

window.addEventListener('scroll', () => {
  const menubox = menu.getBoundingClientRect()
  if (menubox.top < 0) {
    pos = window.pageYOffset
    submenu.classList.add('fixed')
  }

  console.log(pos)
  if (window.pageYOffset < pos) {
    submenu.classList.remove('fixed')
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
