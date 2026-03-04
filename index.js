
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#beef-grid-div',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
})
tl.from('#beef-text-div', {
    x: 500,
    duration: 1
})

    // product animation
    .from(".beef-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.4
    })

    .from('#hot-deals-header', {
        opacity: 0,
        y: 200,
        duration: 1
    })

    .from('.hot-deals-cards', {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.4
    })

const snacksTimline = gsap.timeline({
    scrollTrigger: {
        trigger: '#snacks-main-div',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
snacksTimline.from('#snacks-header', {
    opacity: 0,
    x: 200,
    duration: 1,

})

snacksTimline.from('.snacks-cards', {
    opacity: 0,
    x: 200,
    duration: 1,
    stagger: 0.4,
})
