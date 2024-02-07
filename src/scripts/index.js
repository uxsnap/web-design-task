const sideMenu = document.querySelector('.sideMenu')
const header = document.querySelector('.header')
const sideMenuBurger = sideMenu.querySelector('.sideMenuBurger')
const headerBurger = header.querySelector('.menu')

headerBurger.onclick = function () {
  sideMenu.classList.add('active')
}

sideMenuBurger.onclick = function () {
  sideMenu.classList.remove('active')
}
