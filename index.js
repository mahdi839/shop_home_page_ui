gsap.from('#beef-text-div', {
    x: 500,
    duration: 2
})

const cards = document.querySelectorAll(".product-card");

cards.forEach((card, index) => {

  if (index % 2 === 0) {
    // even cards -> from left
    gsap.from(card, {
      x: -200,
      opacity: 0,
      duration: 1,
      delay: index * 0.1
    });
  } else {
    // odd cards -> from right
    gsap.from(card, {
      x: 200,
      opacity: 0,
      duration: 1,
      delay: index * 0.1
    });
  }

});

gsap.from('#product-card-three',{
    opacity:0,
    duration:1,
    delay:1
})