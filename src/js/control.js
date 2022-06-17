import { loaderView, removeLoader } from './view/spinnerView.js'
import { scrollView } from './view/scrollView.js'
import { menuIconView } from './view/menuView.js'
import { cardView } from './view/featuresView.js'
import { metaLabs } from './view/smartButtonView'
import { neonCursor } from 'threejs-toys'

// import { textControl } from './view/waveView.js'

// console.log(window.innerWidth)
window.onload = function () {
  loaderView()
  removeLoader()
}
menuIconView()
scrollView()
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

// console.log(width)
if (width > 900) {
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
} else {
  cardView()
}

metaLabs('neongroup.hyper.co', {
  purchaseButtonId: 'purchaseButton',
  outOfStockText: 'Join Waitlist',
  inStockText: 'Purchase for $28.99',
})
