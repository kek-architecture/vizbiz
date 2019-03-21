const menu = document.getElementById('menu')
let pos = 0

window.addEventListener('scroll', () => {
  const menubox = menu.getBoundingClientRect()
  if (menubox.top < 0) {
    pos = window.pageYOffset
    menu.classList.add('fixed')
  }

  console.log(pos)
  if (window.pageYOffset < pos) {
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
