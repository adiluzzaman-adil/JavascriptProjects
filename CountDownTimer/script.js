const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




//const userInput = '1 Jan 2023';



function countdown() {

    const schdeuledDate = document.getElementById('inputByUser').value; 

    const inputDate = new Date(schdeuledDate);
    const currentDate = new Date();

    const totalSeconds = (inputDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days); 
    hoursEl.innerHTML = formatTime(hours); 
    minsEl.innerHTML = formatTime(mins); 
    secondsEl.innerHTML = formatTime(seconds); 

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time ; 
}

// Initial Call of the countdown function. 
countdown();

setInterval(countdown, 1000);





