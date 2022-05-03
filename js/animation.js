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

    var text = document.getElementById('data').value;
    update(text);
    play();
}

function StopAnim() {

    stop();
}

function UpdtAnim(){
    var text = document.getElementById("data").value;
    console.log(text);
    update(text);
}

document.getElementById('playBtn').addEventListener("click", PlayAnim);
document.getElementById('stopBtn').addEventListener("click", StopAnim);
document.getElementById('updtpBtn').addEventListener("click", UpdtAnim);


