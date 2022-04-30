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



function PlayAnim() {

    dataInsert({
        "f0": "Mi nombre"
    });
    play();
}

function StopAnim() {

    stop();
}

document.getElementById('playBtn').addEventListener("click", PlayAnim);
document.getElementById('stopBtn').addEventListener("click", StopAnim);