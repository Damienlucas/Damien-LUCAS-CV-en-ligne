

var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

// ----------------------animation explosion emojis------------------
const containerSlot = document.querySelector('.slot');
const btnConfettis = document.querySelector('.btn-confettis');
const emojis = ["🍰", "🍓", "🍑", "🍬"];

  btnConfettis.addEventListener('click', fiesta);

function fiesta(){

    if(isTweening()) return;

    for(let i = 0; i < 50; i++){
        const confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        containerSlot.appendChild(confetti);
    }
    animateConfettis();
}
function animateConfettis(){
    const TLCONF = gsap.timeline();
    TLCONF
    .to('.slot div', { 
        y: "random(-100,100)",
        x: "random(-100,100)",
        z: "random(0,1000)",
        rotation: "random(-90,90)",
        duration: 1,
    })
    .to('.slot div', {autoAlpha: 0, duration: 0.3}, '-=0.2')
    .add(() => {
        containerSlot.innerHTML = "";
    })
}
function isTweening(){
    return gsap.isTweening('.slot div');
}

// ---------------------fin animation explosion emojis---------------
// ----------------début animation timeline partie experiences---------------
const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');
const controller = new ScrollMagic.Controller()
allBoxes.forEach(box => {
    for(i = 0; i < allRonds.length; i++){
        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                Reverse: false
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)
        }
    }
})
// ----------------fin animation timeline partie experiences---------------
