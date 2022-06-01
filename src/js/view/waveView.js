import { neonCursor } from 'threejs-toys'

neonCursor({
  el: document.querySelector('main'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.6,
  radius1: 2,
  radius2: 6,
  velocityTreshold: 80,
  sleepRadiusX: 10,
  sleepRadiusY: 0,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
})

const luminate = document.querySelector('.intro span:first-child')
const success = document.querySelector('.intro span:last-child')

export const textControl = function () {
  setInterval(() => {
    const lumOpacity = parseInt(
      window.getComputedStyle(luminate).getPropertyValue('opacity')
    )
    if (lumOpacity !== 0) luminate.style.opacity = '0'
    else luminate.style.opacity = '1'

    const sucOpacity = parseInt(
      window.getComputedStyle(success).getPropertyValue('opacity')
    )
    if (sucOpacity !== 0) success.style.opacity = '0'
    else success.style.opacity = '1'
  }, 10000)
}
