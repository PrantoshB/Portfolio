const linkHello = document.querySelector('#hellolink')
const linkAbout = document.querySelector('#aboutlink')
const linkPortfolio = document.querySelector('#portfoliolink')
const linkContact = document.querySelector('#contactlink')
/* eslint-disable no-unused-vars */
function onClickMenu () {
  document.querySelector('.mobilemenu').style.display = 'flex'
  document.querySelector('main').style.display = 'none'
  document.querySelector('.header').style.backgroundImage = "url('assets/image_geometry_menu_1.svg')"
  document.querySelector('.header').style.height = '15vh'
  document.querySelector('.mobile_close_icon').style.display = 'block'
  document.querySelector('.mobile_menu_icon').style.display = 'none'
}

function onClickClose () {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
}

linkHello.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkContact.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkAbout.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
linkPortfolio.addEventListener('click', () => {
  document.querySelector('main').style.display = 'block'
  document.querySelector('.mobile_close_icon').style.display = 'none'
  document.querySelector('.mobile_menu_icon').style.display = 'block'
  document.querySelector('.header').style.backgroundImage = 'url(assets/image_geometry_1.svg)'
  document.querySelector('.mobilemenu').style.display = 'none'
  document.querySelector('.header').style.height = '75px'
})
