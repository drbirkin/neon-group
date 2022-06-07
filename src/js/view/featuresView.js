const cards = document.querySelectorAll('.features .container .card')
const contentShow = function (card) {
  // console.log(card)
  removeEffects()
  card.classList.toggle('cardShow')
}

const removeEffects = () => {
  ;[...cards].forEach((card) => card.classList.remove('cardShow'))
}

export const cardView = function () {
  ;[...cards].forEach((card) =>
    card.addEventListener('click', contentShow.bind(this, card))
  )
}

// const luminate = document.querySelector('.intro span:first-child')
// const success = document.querySelector('.intro span:last-child')

// export const textControl = function () {
//   setInterval(() => {
//     const lumOpacity = parseInt(
//       window.getComputedStyle(luminate).getPropertyValue('opacity')
//     )
//     if (lumOpacity !== 0) luminate.style.opacity = '0'
//     else luminate.style.opacity = '1'

//     const sucOpacity = parseInt(
//       window.getComputedStyle(success).getPropertyValue('opacity')
//     )
//     if (sucOpacity !== 0) success.style.opacity = '0'
//     else success.style.opacity = '1'
//   }, 10000)
// }
