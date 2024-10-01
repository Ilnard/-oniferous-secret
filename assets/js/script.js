const burger = document.querySelector('.burger-icon')
const headerNav = document.querySelector('.header__right')
const headerLinks = document.querySelectorAll('.header__link')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-icon_close')

  if (burger.classList.contains('burger-icon_close')) {
    headerNav.classList.add('active')
  }
  else {
    headerNav.classList.remove('active')
  }
})

headerLinks.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('burger-icon_close')
        headerNav.classList.remove('active')
    })
})