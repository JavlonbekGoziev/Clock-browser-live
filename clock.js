document.addEventListener('DOMContentLoaded', () => {
    const hourElement = document.querySelector('.hour');
    const minutesElement = document.querySelector('.minutes');
    const secondElement = document.querySelector('.second');

    setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const secondDeg = (seconds / 60) * 360 + 90;
        const minDeg = (minutes / 60) * 360 + 90;
        const hourDeg = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30;

        secondElement.style.transform = `rotate(${secondDeg}deg)`;
        minutesElement.style.transform = `rotate(${minDeg}deg)`;
        hourElement.style.transform = `rotate(${hourDeg}deg)`;
    }, 1000);
});
