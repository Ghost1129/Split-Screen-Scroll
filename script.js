function ScrollTrigger(){
  const control = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration:'200%',
    triggerElement:'.About-Title',
    triggerHook:0

  })
  .setPin('.About-Title')
  .addIndicators()
  .addTo(control);


}

ScrollTrigger();
