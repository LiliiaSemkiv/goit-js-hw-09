import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let interval;

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

buttonStart.addEventListener('click', onClick);

function onClick() {
    const dateTime = flatpickr.parseDate(input.value, "Y-m-d H:i");
    clearInterval(interval);

    interval = setInterval(() => {
        const currentTime = new Date();
        const timerTime = dateTime - currentTime;
        if (timerTime <= 0) {
            clearInterval(interval);
            updateTimer(convertMs(0));
        } else {
            updateTimer(convertMs(timerTime));
        }
    }, 1000);
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const chosenDate = selectedDates[0];
        if (chosenDate < new Date()) {
            window.alert("Please choose a date in the future");
            buttonStart.setAttribute("disabled", "true");
        } else {
            buttonStart.removeAttribute("disabled");
        }
    },
};

flatpickr(input, options);

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function updateTimer(time){
    days.textContent = addLeadingZero(time.days);
    hours.textContent = addLeadingZero(time.hours);
    minutes.textContent = addLeadingZero(time.minutes);
    seconds.textContent = addLeadingZero(time.seconds);
}