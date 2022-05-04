//gsap.from("#box", {x: -150, duration: 1});
//gsap.from("#f0t", {x: -150, duration: 1, delay: 0.2});

var tl = gsap.timeline({
    paused: true
});

tl.to("#box", {
        x: 160,
        duration: 1
    })
    .to("#f0", {
        x: 150,
        duration: 1
    }, 0.2);