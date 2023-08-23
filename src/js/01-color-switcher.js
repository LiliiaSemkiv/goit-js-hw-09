function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]')
// console.log(buttonStart)
// console.log(buttonStop)
let interval = 0;

buttonStart.addEventListener("click", onStart);

function onStart(){
    if(!interval){
        interval = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor()
        }, 1000)
        buttonStart.disabled = true;
    }
}

buttonStop.addEventListener('click', onStop);

function onStop(){
    clearInterval(interval);
    interval = 0;
    buttonStart.disabled = false;
}
