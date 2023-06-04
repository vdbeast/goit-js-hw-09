import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const inputEl = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

startButton.addEventListener('click', startCountdown);

function startCountdown() {
  const selectedDate = new Date(inputEl.value).getTime();
  const intervalId = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = selectedDate - now;

    if (distance <= 0) {
      clearInterval(intervalId);
      setCountdownValue(0, 0, 0, 0);
    } else {
      const { days, hours, minutes, seconds } = convertMs(distance);
      setCountdownValue(days, hours, minutes, seconds);
    }
  }
}

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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function setCountdownValue(days, hours, minutes, seconds) {
  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}
