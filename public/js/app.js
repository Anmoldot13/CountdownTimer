const timeLeft = document.getElementById("time-left");

const birthday = new Date("02/13/2023");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;

  if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday!";
    clearInterval(timerId);
    return;
  } else if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you had a nice birthday";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML =
    // days +
    // " days - " +
    // hours +
    // " hours - " +
    // minutes +
    // " minutes - " +
    // seconds +
    // " seconds ";
    days + " days - " + hours + " hr - " + minutes + " min - " + seconds + " s";
}
timerId = setInterval(countDown, second);

//Add this ripple effect--

// $("#ripple").ripples({
//   resolution: 512,
//   dropRadius: 20,
//   perturbance: 0.04,
// });

// console.log(birthday);
