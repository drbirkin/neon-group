import ScrollMagic from 'scrollmagic'
const controller = new ScrollMagic.Controller()

export const scrollView = function () {
  new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0.9, // show, when scrolled 10% into view
    // duration: '80%', // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50, // move trigger to center of element
    reverse: false,
  })
    .setClassToggle('#reveal1', 'visible') // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller)

  const revealElements = document.querySelector('.bots')
  new ScrollMagic.Scene({
    triggerElement: revealElements.children[1], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9,
  })
    .setClassToggle('.bots', 'visible') // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller)
  //   for (let i = 0; i < revealElements.children.length; i++) {
  //     // create a scene for each element
  //     new ScrollMagic.Scene({
  //       triggerElement: revealElements.children[i], // y value not modified, so we can use element as trigger as well
  //       offset: 50, // start a little later
  //       triggerHook: 0.9,
  //     })
  //       .setClassToggle(revealElements.children[i], 'visible') // add class toggle
  //       .addIndicators() // add indicators (requires plugin)
  //       .addTo(controller)
  //   }
}
