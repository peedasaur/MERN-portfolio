let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const statusText = document.getElementById('statusText');
const statusDot = document.querySelector('.dot');

function updateDisplay(time) {
    const date = new Date(time);
    const m = String(date.getUTCMinutes()).padStart(2, '0');
    const s = String(date.getUTCSeconds()).padStart(2, '0');
    const ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    const h = String(Math.floor(time / (1000 * 60 * 60))).padStart(2, '0');

    displayHours.textContent = h;
    displayMinutes.textContent = m;
    displaySeconds.textContent = s;
    displayMilliseconds.textContent = ms;
}

function startStop() {
    if (isRunning) {
        
        clearInterval(timerInterval);
        isRunning = false;
        startStopBtn.innerHTML = '<i class="fas fa-play"></i> Start';
        startStopBtn.classList.remove('running');
        
        statusText.textContent = "Paused";
        statusDot.classList.remove('active');
    } else {
        
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 10);

        isRunning = true;
        startStopBtn.innerHTML = '<i class="fas fa-pause"></i> Stop';
        startStopBtn.classList.add('running');
        
        statusText.textContent = "Running";
        statusDot.classList.add('active');
    }
}

function reset() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(0);

    startStopBtn.innerHTML = '<i class="fas fa-play"></i> Start';
    startStopBtn.classList.remove('running');
    

    statusText.textContent = "Stopped";
    statusDot.classList.remove('active');
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);


updateDisplay(0);

