// building the countdown timer 

const countdown = () => {
    const countDate = new Date('June 22, 2022 00:00:00').getTime();
    // get the difference between the launch date and now
    const now = new Date().getTime();
    const gap = countDate - now;

// how time works
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// calculating the difference between then and now
const textDay = Math.floor(gap/day);
const textHour = Math.floor((gap % day)/hour);
const textMinute = Math.floor((gap % hour)/minute);
const textSecond = Math.floor((gap % minute)/second);
console.log(textDay);

document.querySelector('.day').innerText = textDay;
document.querySelector('.hour').innerText = textHour;
document.querySelector('.minute').innerText = textMinute;
document.querySelector('.second').innerText = textSecond;

};

setInterval(countdown, 1000); // running the countdown every second


// setting up client side validation on sign-up.html form

// setting up variables

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let company = document.getElementById('company');

let errorIcon = querySelector('.error-icon');

// setting up the event listener for submit button

form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

// function for validation

