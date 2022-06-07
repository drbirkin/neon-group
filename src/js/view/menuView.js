export const menuIconView = function () {
  const menuIcon = document.querySelector('#mobile-menu')
  const mobileMenu = document.querySelector('.navbar ul')
  menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('is-active')
    mobileMenu.classList.toggle('mobile-active')
    // [...menuIcon.children].forEach((bar) => {
    //   bar.classList.toggle('mobile-menu')
    // })
  })
}
