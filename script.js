// script.js
const countdown = () => {
    const countToDate = new Date('2024-01-10T11:11:11').getTime();
    const now = new Date().getTime();
    const difference = countToDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    document.getElementById('days').innerText = timeDays + ' Days';
    document.getElementById('hours').innerText = timeHours + ' Hours';
    document.getElementById('minutes').innerText = timeMinutes + ' Minutes';
    document.getElementById('seconds').innerText = timeSeconds + ' Seconds';
};

setInterval(countdown, 1000);

