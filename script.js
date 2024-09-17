// write js code here if required
// script.js

const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    timerElement.textContent = timerString;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initialize timer
updateTimer();