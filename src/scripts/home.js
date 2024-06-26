const sideMenu = document.querySelector('.sideMenu')
const header = document.querySelector('.header')
const sideMenuBurger = sideMenu.querySelector('.sideMenuBurger')
const headerBurger = header.querySelector('.menu')
const sideCart = document.querySelector('.sideCart')
const cartIcon = header.querySelector('.cart')
const trashIcon = sideCart.querySelector('.trashIcon')
const makeOrder = sideCart.querySelector('.mainButton')
const plusButtons = document.querySelectorAll('.plusButton')

headerBurger.onclick = function () {
  sideMenu.classList.add('active')
}

sideMenuBurger.onclick = function () {
  sideMenu.classList.remove('active')
}

cartIcon.onclick = function () {
  sideCart.classList.add('active')
}

trashIcon.onclick = function () {
  sideCart.classList.remove('active')
}

makeOrder.onclick = function () {
  window.location.href = 'order.html'
}

plusButtons.forEach(plusButton => (
  plusButton.onclick = function () {
    sideCart.classList.add('active')
  }
));